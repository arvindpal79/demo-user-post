import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataHttpService {

  constructor(private http: HttpClient) { }

  getUsers = (): Observable<HttpResponse<any>> => {
    return this.http.request<any>('get', `https://jsonplaceholder.typicode.com/users`);
  }
  getUserPost = (): Observable<HttpResponse<any>> => {
    return this.http.request<any>('get', `https://jsonplaceholder.typicode.com/posts`);
  }
  getPostComments = (postId:string): Observable<HttpResponse<any>> => {
    return this.http.request<any>('get', `https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }
}
