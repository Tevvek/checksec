import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  username:String;
  users:Array<any>;

  constructor(private service:SearchService, private route: ActivatedRoute) {
    this.users = null;
    this.route.params.subscribe(params => {
      const username = params['login'];
      if(!!username) {
        this.username = username;
        this.searchUser(username);
      }
    });
  }

  ngOnInit() {
  }

  async searchUser(userName) {
    this.users = await this.service.seachUser(userName);
  }
}
