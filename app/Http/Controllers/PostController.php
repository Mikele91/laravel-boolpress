<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
class PostController extends Controller
{
    public function index(){
        $posts = Post::all();
        return view("guest.posts.index", compact("posts"));
    }
    public function show($slug){
        //SELECT FOR posts WHERE slug = slug LIMIT-1
         $post = Post::where("slug",$slug)->first();
         if(!$post){
             abort("404");
         }
         return view("guest.posts.show", compact("post"));
    }
}  