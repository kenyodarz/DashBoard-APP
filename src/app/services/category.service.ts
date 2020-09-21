// Angular
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
// Model
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private afd: AngularFireDatabase) {}

  addCategory(category: Category) {
    let categoryRef = this.afd.database.ref('categories');
    let newCategory = categoryRef.push();
    category.id = newCategory.key;
    let categoryRefId = this.afd.database.ref('categories/' + category.id);
    categoryRefId.set(category);
  }

  getCategories(): Observable<Category[]> {
    return this.afd.list<Category>('/categories').valueChanges();
  }
}
