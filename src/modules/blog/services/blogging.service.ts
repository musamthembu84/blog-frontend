import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseURL = 'http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})
export class BloggingService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any>{
      return this.httpClient.get(baseURL+'getPosts?numberOfPosts=5');
  }



}
