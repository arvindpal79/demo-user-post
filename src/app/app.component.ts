import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-user-post';
  users:any = [];
  posts:any = [];
  userPost:any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers().subscribe(users => this.users = users);
    this.getUserPost().subscribe(posts => this.posts = posts);
  }

  getUsers = () => {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUserPost = () => {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  showPost = (userId:string) => {
    this.userPost = this.posts.filter((post:any) => post?.userId === userId);
  }
}
