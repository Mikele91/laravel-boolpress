@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if ($message = Session::get('success'))
                        <div class="alert alert-success alert-block">
                            <button type="button" class="close" data-dismiss="alert">×</button>    
                            <strong>{{ $message }}</strong>
                        </div>
                    @endif
                    <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Slug</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                        @foreach ($posts as $post)
                          <tr>
                            <td>{{$post["id"]}}</td>
                            <td>{{$post["title"]}}</td>
                            <td>{{$post["slug"]}}</td>
                            <td>

                                <a href="{{route("admin.posts.show", $post["id"])}}">
                                    <button type="button" class="btn btn-primary">Visualizza</button>
                                </a>
                                <form action="{{route("admin.posts.destroy", $post["id"])}}" method="POST">
                                    @csrf
                                    @method("DELETE")
                                    <button type="submit" class="btn btn-danger">Elimina</button>

                                </form>
                            </td>
                          </tr>
                            
                        @endforeach
                        
                         
                        </tbody>
                      </table>

                  
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
