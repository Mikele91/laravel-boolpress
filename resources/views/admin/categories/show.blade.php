@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                <h1>{{$category["title"]}}</h1>
                <p>{{$category["slug"]}}</p>

                <p>{{$category["content"]}}</p>

                <ul>
                    {{-- @dd($category) --}}
                    <h3>Lista post Associati</h3>
                    @forelse ($category["posts"] as $post)
                    <li>
                            {{$post["title"]}}
                    </li>
                    @empty
                    <h3>Non ci sono post associati</h3>

                    
                    @endforelse
                </ul>


                
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
