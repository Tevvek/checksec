import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotFoundException } from '../../shared/exceptions/NotFoundException';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL:String = "https://api.github.com/";

  constructor(private http: HttpClient) { }

  getRepos(username) {
    const USER_REPOS_ENDPOINT = `${this.BASE_URL}users/${username}/repos`;
    return this.http.get(USER_REPOS_ENDPOINT).toPromise().then((res:Array<any>) => {
      return res.map(repo => {
        return {
          name: repo['name'] || 'Repository without name',
          language: repo['language'] || 'No language specified',
          'default_branch': repo['default_branch'] || 'No default branch specified',
          archived: repo['archived'] ? 'Yes' : 'No',
          watchers: repo['watchers']
        }
      })        
    }).catch(err => {
      throw new NotFoundException();
    });
  }

  getUserInfo(username) {
    const USER_INFO_ENDPOINT = `${this.BASE_URL}users/${username}`;
    return this.http.get(USER_INFO_ENDPOINT).toPromise().then((res) => {
      return {
        login: res['login'],
        name: res['name'] || 'This user hasn\'t specified a name',
        email: res['email'] || 'This user hasn\'t specified an email',
        hireable: res['hireable'] ? 'This person is looking for a job!' : 'This user hasn\'t specified if he/she is looking for a job'
      }
    }).catch(err => {
      throw new NotFoundException();
    });
  }
}
