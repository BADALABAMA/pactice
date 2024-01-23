import { Component } from '@angular/core';
import { ProductService } from '../products.service';
import { ActivatedRoute, Route } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  productId: number = 0;
  public product: any = { id: this.productId, title: '', price: 0 };
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((param) => {
      console.log(param);
      this.productId = +param['id'];
      this.getProduct(this.productId);
      console.log(this.productId);
    });
  }

  ngOnInit() {}
  getProduct(productId: number) {
    this.productService.getProductById(productId).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );

    console.log(this.product);
  }
}
