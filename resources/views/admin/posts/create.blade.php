@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                
                <div class="card-header">Aggiungi il Post</div>

                <div class="card-body">
            

                    <form action="{{route("admin.posts.store")}}" method="POST">
                        @csrf
                        {{-- @method("POST") --}}
                    <div class="form-group">
                        <label for="title">Titolo</label>
                        <input type="text" name ="title" class="form-control @error('title') is-invalid @enderror" id="title"  placeholder="inserisci il titolo" value="{{old("title")}}">
                        @error('title')
                            <div class="alert alert-danger">{{ $message }}</div>
                        @enderror
                        </div>
                        <div class="form-group">
                            <label for="content">Contenuto</label>
                            <textarea class="form-control @error('content') is-invalid @enderror" name="content" id="content" cols="30" rows="10" placeholder="inserisci il contenuto">{{old("content")}}</textarea>
                            @error('content')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="category">Categoria</label>

                            {{-- Bisogna usare il nome della colonna nel name della select --}}
                            <select name="category_id" class="form-control name="" id="" @error('category_id') is-invalid @enderror">
                                <option value="">--Seleziona una categoria--</option>
                                @foreach ($categories as $category)
                                <option {{old("category_id")== $category["id"] ? "selected" : "null"}} value="{{$category["id"]}}">{{$category["name"]}}</option>
                                @endforeach
                            </select>
                            @error('category_id')
                            <div class="alert alert-danger">{{ $message }}</div>
                        @enderror
                        </div>


                        <div class="form-group">
                            <p>Tags</p>
                            @foreach ($tags as $tag)
                                
                            <div class="custom-control custom-checkbox">
                                <input {{in_array($tag["id"], old("tags", [])) ? "checked" : null}} name="tags[]" value="{{$tag["id"]}}" type="checkbox" class="custom-control-input" id="tag-{{$tag["id"]}}">
                                <label class="custom-control-label" for="tag-{{$tag["id"]}}">{{$tag["name"]}}</label>
                                </div>
                                @endforeach
                                @error('tags')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Crea</button>
                    </form>
                
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
