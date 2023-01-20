import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  public productData!: Product;
  private productID!: number;
  public loading!: boolean;
  private endsubs$: Subject<any> = new Subject();

  constructor(private route: ActivatedRoute, private _ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productID = params["productID"];
      this.getProductDetails(this.productID);
    });
  }

  private getProductDetails(productID: number) {
    this.loading = true;
    this._ProductsService.getProductDetails(productID).pipe(takeUntil(this.endsubs$)).subscribe({
      next: (res: any) => {
        this.productData = res;
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
