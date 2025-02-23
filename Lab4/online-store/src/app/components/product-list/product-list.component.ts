import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common'; // ✅ Добавляем CommonModule

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent], // ✅ Теперь *ngFor и *ngIf работают
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  private categoryService = inject(CategoryService);
  categories = this.categoryService.getCategories();
  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
}
