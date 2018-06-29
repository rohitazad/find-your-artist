import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'text/xml' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  

  getData(name:string, count:number){
    return this.http.get('http://itunes.apple.com/search?term='+name+'&limit='+count, { observe: 'response'})
  }
}
