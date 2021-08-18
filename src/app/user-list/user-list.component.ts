import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserDataHttpService } from '../http-data/user-data-http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users:any = [];
  posts:any = [];
  activeUserId = '';
  @Output() userPost = new EventEmitter<{userPost:Array<string>, userName:string}>();

  constructor(private userData: UserDataHttpService) {}

  ngOnInit() {
    this.userData.getUsers().subscribe(users => this.users = users);
    this.userData.getUserPost().subscribe(posts => this.posts = posts);
  }

  showPost = (userId:string, userName:string) => {
    this.activeUserId = userId;
    this.userPost.emit({
      userPost: this.posts.filter((post:any) => post?.userId === userId),
      userName: userName
    });
  }

}
