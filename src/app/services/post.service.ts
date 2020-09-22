// Angular
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
// Model
import { Post } from 'src/app/models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private afd: AngularFireDatabase) {}

  addPost(post: Post) {
    let postRef = this.afd.database.ref('posts');
    let newPost = postRef.push();
    post.id = newPost.key;
    let postRefID = this.afd.database.ref('posts/' + post.id);
    postRefID.set(post);
  }

  getPost(): Observable<Post[]> {
    return this.afd.list<Post>('/categories').valueChanges();
  }

  deletePost(ids: string[]) {
    ids.forEach((id) => {
      this.afd.object('/posts/' + id).remove();
    });
  }
}
