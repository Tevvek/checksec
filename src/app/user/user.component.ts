import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user:any = {};
  repos:Array<any> = [];
  login:String = '';

  constructor(private userService:UserService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const login = params['login'];
      if(!!login) {
        this.login = login;
        this.searchUser(login);
        this.searchRepos(login);
      }
    });
  }

  ngOnInit() {
  }

  async searchUser(login) {
    this.user = await this.userService.getUserInfo(login);
  }

  async searchRepos(login) {
    this.repos = await this.userService.getRepos(login);
  }

}
