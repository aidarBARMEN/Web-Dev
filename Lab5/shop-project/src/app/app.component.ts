import { Component } from '@angular/core';
import { Category, Product } from './models/product.model';
import { PRODUCTS_DATA } from './data/product.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shop-project';
  categories: Category[] =  PRODUCTS_DATA;
  selectedCategory? : Category;

  SelectCategory(category: Category){
    this.selectedCategory = category;
  }

}
