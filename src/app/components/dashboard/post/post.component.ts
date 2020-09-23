import { Component, OnInit } from '@angular/core';
// Models
import { Post } from 'src/app/models/post';
// Services
import { PostService } from 'src/app/services/post.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  posts: Post[];
  selectedPosts: string[];
  searchWord: string;
  cols: any[];

  constructor(
    private postService: PostService,
    private categoryService: CategoryService
  ) {
    this.posts = [];
    this.cols = [];
    this.selectedPosts = [];
  }

  getPosts() {
    this.postService.getPost().subscribe((posts) => {
      // console.log(posts);
      this.categoryService.getCategories().subscribe((categories) => {
        posts.forEach((p) => {
          if (p.categories) {
            p.categories.forEach((c_post, index) => {
              const categoryFound = categories.find((c) => c.id === c_post);
              if (categoryFound) {
                p.categories[index] = categoryFound.name;
              }
            });
          } else p.categories = null;
        });
        this.posts = posts;
        // console.log(this.posts);
      });
    });
  }

  updateword(value) {
    this.searchWord = value;
  }

  deletePosts() {
    this.postService.deletePost(this.selectedPosts);
    this.selectedPosts = [];
  }

  ngOnInit(): void {
    this.getPosts();
    this.cols = [
      { header: 'Seleccionado' },
      { header: 'Titulo' },
      // { header: 'Contenido' },
      { header: 'Fecha' },
      { header: 'Imagen' },
      { header: 'Categorias' },
    ];
  }
}
