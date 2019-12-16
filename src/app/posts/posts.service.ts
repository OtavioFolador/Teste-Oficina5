import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  listAllPosts() {
    return this.http.get<any[]>(`${this.postsURL}`)
    .toPromise()
    .then();
  }
}
