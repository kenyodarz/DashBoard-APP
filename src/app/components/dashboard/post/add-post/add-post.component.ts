// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { MessageService } from 'primeng/api';
import { PostService } from 'src/app/services/post.service';
// Models
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  post: Post = {
    categories: null,
    content: null,
    date: null,
    id: null,
    img: null,
    title: null,
  };
  constructor(
    private messageService: MessageService,
    private postService: PostService,
    private router: Router
  ) {}

  addPost() {
    this.postService.addPost(this.post);
    this.messageService.add({
      severity: 'success',
      summary: 'Correcto',
      detail: 'Post Publicado Correctamente',
    });
    this.router.navigateByUrl('/categories');
  }

  getCategories($event: string[]) {
    console.log($event);
    // console.log(typeof($event));
    this.post.categories = $event;
  }

  ngOnInit(): void {}
}
