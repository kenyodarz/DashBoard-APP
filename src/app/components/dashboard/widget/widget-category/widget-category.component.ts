// Angular
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// Models
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-widget-category',
  templateUrl: './widget-category.component.html',
  styleUrls: ['./widget-category.component.css'],
})
export class WidgetCategoryComponent implements OnInit {
  @Output() select: EventEmitter<String[]>;
  categories: Category[];
  selectedCategories: string[];

  constructor(private categoryService: CategoryService) {
    this.categories = [];
    this.selectedCategories = [];
    this.select = new EventEmitter<String[]>();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((listCategories) => {
      this.categories = listCategories;
    });
  }

  sendCategories() {
    this.select.emit(this.selectedCategories);
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
