<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Post;
use App\Category;
use App\Tag;
class PostController extends Controller
{
    protected $validationRoules=[
        'title'=> 'string|required|max:100',
        'content'=> 'string|required',
        "category_id"=> 'nullable|exists:categories,id',
        "tags" =>'exists:tags,id',
    ]; 
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts= Post::all();
        return view("admin.posts.index", compact("posts"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        $tags = Tag::all();
        
        return  view("admin.posts.create" , compact("categories", "tags"));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd( $request->all() );
        $request->validate($this->validationRoules);
        $newPost = new Post();
        $newPost->fill($request->all());
        $newPost->slug =$this->getSlug($request->title);

        $newPost->save();

        $newPost->tags()->attach($request->tags);

        return redirect()->route("admin.posts.index")->with("success", "il Post è stato creato ");

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        return view("admin.posts.show", compact("post"));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        $categories = Category::all();
        $tags = Tag::all();
        return view("admin.posts.edit ", compact("post","categories","tags"));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        $request->validate($this->validationRoules);
        // $post->update();
        if($post->title!= $request->title){
    
            $post->slug =$this->getSlug($request->title);
        }
        $post->fill($request->all());

        $post->save();

        $post->tags()->sync($request->tags);
        return redirect()->route("admin.posts.show", $post->id)->with("success", "il Post è stato Modificato ");;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->route("admin.posts.index")->with("success", "il Post {$post->title} è stato eliminato ");
    }

    protected function getSlug($title){

        $slug =Str::of($title)->slug('-');
 
        $postExist  = Post::where("slug", $slug)->first();

            $count= 2 ;
            while($postExist){
                $slug = Str::of($title)->slug('-') . "-{$count}";
                $postExist = Post::where("slug", $slug)->first();
                $count++;
            }
            return $slug;
        
    }
}
