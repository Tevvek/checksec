import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  BASE_URL:String = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  seachUser(userName) {
    const SEARCH_USER_ENDPOINT = `${this.BASE_URL}search/users?q=${userName}`;
    return this.http.get(SEARCH_USER_ENDPOINT).toPromise().then((res) => {
      if(res['total_count'] === 0) {
        return null;
      } else {
        return res['items'].map((user) => {
          return user['login'];
        })
      }
    }).catch(err => {
      console.log('err');
      console.log(err);
    });
  }
}
