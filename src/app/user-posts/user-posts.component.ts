import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  posts:Array<any> = [];
  postComments:any = [];
  postsLen = 3;
  @Input() set userPosts(posts:Array<any>){
    this.posts = posts;
    this.postsLen = 3;
  };
  activePost:any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getPostComments = (postId:string) => {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

  showComments = (postId:string) => {
    this.activePost = postId;
    this.getPostComments(postId).subscribe(posts => this.postComments = posts);
  }

}
