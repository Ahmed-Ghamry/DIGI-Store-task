import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent implements OnInit {

  public categories!: string[];
  public submitLoading!: boolean;
  public createProductForm: FormGroup = this._FB.group({
    title: ['', [Validators.required]],
    price: ['', [Validators.required]],
    description: ['', [Validators.required]],
    image: ['', [Validators.required]],
    category: ['', [Validators.required]],
  });

  constructor(private _ProductsService: ProductsService, private _FB: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  private getAllCategories() {
    this._ProductsService.getAllCategories().subscribe({
      next: (res: any) => {
        this.categories = res;
      },
      error: (err: any) => { },
      complete: () => { }
    })
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'close', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 3 * 1000,
    });
  }

  public createProduct() {
    this.submitLoading = true;
    if (this.createProductForm.valid) {
      this._ProductsService.createNewProduct(this.createProductForm.value).subscribe({
        next: (res: any) => {
          this.openSnackBar('Product has been created successfuly');
        },
        error: (err: any) => {
          this.submitLoading = false;
          this.openSnackBar('Product has been not create!');
        },
        complete: () => {
          this.submitLoading = false;
          this.createProductForm.reset();
        }
      });
    }
  }
}
