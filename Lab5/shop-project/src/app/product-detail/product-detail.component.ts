import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { PRODUCTS_DATA } from '../data/product.data'; // Импортируем данные
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  standalone: false
})

export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productName = this.route.snapshot.paramMap.get('id');
    if (productName) {
      for (const category of PRODUCTS_DATA) {
        const foundProduct = category.products.find(p => p.name === productName);
        if (foundProduct) {
          this.product = foundProduct;
          break;
        }
      }
    }
  }
}
