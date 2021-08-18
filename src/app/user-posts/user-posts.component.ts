import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDataHttpService } from '../http-data/user-data-http.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  posts:Array<any> = [];
  postComments:any = [];
  postsLen = 3;
  @Input() userName = '';
  @Input() set userPosts(posts:Array<any>){
    this.posts = posts;
    this.postsLen = 3;

    this.heading = `Posts for ${this.userName}`;
  };
  activePost:any = null;
  heading = ``;

  constructor(private userData: UserDataHttpService) { }

  ngOnInit(): void {}

  showComments = (postId:string) => {
    this.activePost = postId;
    this.userData.getPostComments(postId).subscribe(posts => this.postComments = posts);
  }

}
