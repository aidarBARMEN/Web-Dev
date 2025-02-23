import { Injectable, signal } from '@angular/core';
import { Category } from '../models/category.model';
import categoriesData from '../../../products.json';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = signal<Category[]>(categoriesData as Category[]); // ✅ Преобразуем JSON в Category[]

  getCategories() {
    return this.categories();
  }
}
