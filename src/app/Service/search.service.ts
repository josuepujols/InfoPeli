import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable() 
export class SearchService {
    private url:string;
    $emitter = new EventEmitter();

    constructor( private _http:HttpClient ) {

    }


    search_movies(pelicula:string):Observable<any> {
        this.url = "https://www.omdbapi.com/?&apikey=6a5dc08d&s=" + pelicula;
        return this._http.get(this.url);
    }

}

