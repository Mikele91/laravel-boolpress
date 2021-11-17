@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                <h1>{{$category["title"]}}</h1>
                <p>{{$category["content"]}}</p>


                
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
