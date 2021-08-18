import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserDataHttpService } from './http-data/user-data-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userPost:any = [];
  userName:string = '';

  constructor() {}

  updateUserPost = (e:{userPost:Array<string>, userName:string}) => {
    this.userPost = e.userPost;
    this.userName = e.userName;
  }
}
