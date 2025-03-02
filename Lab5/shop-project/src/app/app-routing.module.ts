import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyShopComponent } from './my-shop/my-shop.component';

const routes: Routes = [
  { path: '', component: MyShopComponent },
  { path: 'product-detail/:id', loadComponent: () => import('./product-detail/product-detail.component').then(m => m.ProductDetailComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
