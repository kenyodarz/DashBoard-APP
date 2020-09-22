import { Component, OnInit } from '@angular/core';
// Models
import { Post } from 'src/app/models/post';
// Services
// import {  } from "src/app/services/";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: Post[];
  selectedPost: Post;
  searchWord: string;

  constructor() {}

  addPost(){
    
  }

  updateword(value) {
    this.searchWord = value;
  }

  ngOnInit(): void {}
}
