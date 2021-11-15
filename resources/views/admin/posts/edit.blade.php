@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Aggiungi il Post</div>

                <div class="card-body">
            

                    <form action="{{route("admin.posts.update", $post["id"])}}" method="POST">
                        @csrf
                         @method("PUT") 
                    <div class="form-group">
                        <label for="title">Titolo</label>
                        <input type="text" name ="title" class="form-control @error('title') is-invalid @enderror" id="title"  placeholder=" il titolo" value="{{$post["title"]}}">
                        @error('title')
                            <div class="alert alert-danger">{{ $message }}</div>
                        @enderror
                        </div>
                        <div class="form-group">
                            <label for="content">Contenuto</label>
                            <textarea class="form-control @error('content') is-invalid @enderror" name="content" id="content" cols="30" rows="10" placeholder="il contenuto">{{$post["content"]}}</textarea>
                            @error('content')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                        </div>

                        
                        <button type="submit" class="btn btn-primary">Modifica</button>
                    </form>
                
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
