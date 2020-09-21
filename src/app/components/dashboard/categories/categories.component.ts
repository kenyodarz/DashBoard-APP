import { Component, OnInit } from '@angular/core';
// Services
import { CategoryService } from 'src/app/services/category.service';
// Model
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  selectedCategories;

  cols: any[];

  constructor(private categoryService: CategoryService) {}

  getCategories() {
    this.categoryService.getCategories().subscribe((listCategories) => {
      this.categories = listCategories;
      console.log(this.categories);
    });
  }

  ngOnInit(): void {
    this.getCategories();
    this.cols = [
      { header: 'Seleccionada' },
      { header: 'Nombre' },
      { header: 'Descripcion' },
    ];
  }
}
