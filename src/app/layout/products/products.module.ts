import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListPageComponent } from './components/products-list-page/products-list-page.component';
import { AddProductPageComponent } from './components/add-product-page/add-product-page.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';


@NgModule({
  declarations: [

    ProductsListPageComponent,
    AddProductPageComponent,
    ProductDetailsPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
