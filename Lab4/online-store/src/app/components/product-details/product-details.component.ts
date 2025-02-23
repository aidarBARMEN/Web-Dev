import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../pages/products-list/products.models';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  product: Product | undefined;

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.products().find(p => p.id === productId);
  }
}
