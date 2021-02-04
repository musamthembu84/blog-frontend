import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseURL = 'http://localhost:8080/getPosts?numberOfPosts=5'

@Injectable({
  providedIn: 'root'
})
export class BloggingService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any>{
      return this.httpClient.get(baseURL);
  }
}
