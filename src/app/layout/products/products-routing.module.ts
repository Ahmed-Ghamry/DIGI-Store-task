import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListPageComponent } from './components/products-list-page/products-list-page.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';
import { AddProductPageComponent } from './components/add-product-page/add-product-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'products-list', pathMatch: 'full' },
  { path: 'products-list', component: ProductsListPageComponent },
  { path: 'product-details/:productID', component: ProductDetailsPageComponent },
  { path: 'add-product', component: AddProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
