import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HomeService {
    private url:string;

    constructor( private _http:HttpClient ) {

    }

    //Metodo para traer una pelicula
    get_movie(name:string, year:number):Observable<any> {
        this.url = "https://www.omdbapi.com/?t=" + name + "&y=" + year +  "&apikey=6a5dc08d";
        return this._http.get(this.url);
    }

} 

