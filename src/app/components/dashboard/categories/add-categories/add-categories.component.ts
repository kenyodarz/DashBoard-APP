// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { MessageService } from 'primeng/api';
import { CategoryService } from 'src/app/services/category.service';
// Models
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css'],
})
export class AddCategoriesComponent implements OnInit {
  category: Category = {
    id: null,
    description: null,
    name: null,
  };

  constructor(
    private messageService: MessageService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  addCategory() {
    console.log(this.category);
    this.categoryService.addCategory(this.category)
    this.messageService.add({
      severity: 'success',
      summary: 'Correcto',
      detail: 'Categoria Agregada Correctamente',
    });
    this.router.navigateByUrl('/categories')
  }

  ngOnInit(): void {}
}
