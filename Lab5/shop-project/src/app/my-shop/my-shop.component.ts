import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-my-shop',
  standalone: false,
  templateUrl: './my-shop.component.html',
  styleUrl: './my-shop.component.css'
})
export class MyShopComponent {
  products: Product[] = [
  ];

}
  



