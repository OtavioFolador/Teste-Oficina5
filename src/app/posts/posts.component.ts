import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  
  constructor(private postService: PostsService, private router: Router) { 
    this.listAllPosts();
  }

  ngOnInit() {
  }

  listAllPosts() {
    this.postService.listAllPosts().then(data => {
      this.posts = data;
    }
    );
  }



}
