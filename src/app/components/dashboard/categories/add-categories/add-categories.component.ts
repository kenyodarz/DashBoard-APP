// Angular
import { Component, OnInit } from '@angular/core';
// Services
// Models
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css'],
})
export class AddCategoriesComponent implements OnInit {
  category: Category;

  constructor() {}

  ngOnInit(): void {}
}
