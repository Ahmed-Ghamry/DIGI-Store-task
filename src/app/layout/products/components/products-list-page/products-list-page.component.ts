import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.scss']
})
export class ProductsListPageComponent implements OnInit {

  public productsData!: Product[];
  public loading!: boolean;
  private endsubs$: Subject<any> = new Subject();

  constructor(private _ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts() {
    this.loading = true;
    this._ProductsService.getAllProducts().pipe(takeUntil(this.endsubs$)).subscribe({
      next: (res: any) => {
        this.productsData = res;
      },
      error: (err: any) => {
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
