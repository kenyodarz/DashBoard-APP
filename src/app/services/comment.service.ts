import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { IComment } from '../models/interfaces/icomment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private afd: AngularFireDatabase) {}

  getComments(): Observable<IComment[]> {
    return this.afd.list<IComment>('/comments').valueChanges();
  }

  getLastComments(): Observable<IComment[]> {
    return this.afd
      .list<IComment>('/comments', (ref) =>
        ref.orderByChild('date').limitToFirst(5)
      )
      .valueChanges();
  }
}
