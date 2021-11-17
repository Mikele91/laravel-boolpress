@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Aggiungi una Categoria</div>

                <div class="card-body">
            

                    <form action="{{route("admin.categories.store")}}" method="POST">
                        @csrf
                        {{-- @method("POST") --}}
                    <div class="form-group">
                        <label for="name">Nome</label>
                        <input type="text" name ="name" class="form-control @error('name') is-invalid @enderror" id="name"  placeholder="inserisci il nome della categoria" value="{{old("name")}}">
                        @error('name')
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
