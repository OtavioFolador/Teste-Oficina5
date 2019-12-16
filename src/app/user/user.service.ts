import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

usersURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  listAllUsers() {
    return this.http.get<any[]>(`${this.usersURL}`)
    .toPromise()
    .then();
  }

  listUser(userId) :Promise<any>{
    return this.http.get<any[]>(`${this.usersURL + '/' + userId}`)
    .toPromise()
    .then();
  }
}
