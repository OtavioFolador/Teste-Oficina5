import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commentsURL = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  listAllComments() {
    return this.http.get<any[]>(`${this.commentsURL}`)
    .toPromise()
    .then();
  }
}
