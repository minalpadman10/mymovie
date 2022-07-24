import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { movieUrl } from './Apis';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _movieUrl = movieUrl;
  constructor(private http: HttpClient,private _router:Router) { }

  
  getMovies() {
    return this.http.get<any>(this._movieUrl);
  }
}