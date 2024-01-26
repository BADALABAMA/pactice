import { Component } from '@angular/core';
import { ProductService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  films: any = [];
  product: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getFilms().subscribe(
      (data) => {
        this.films = data;
        console.log(data);
        console.log(this.films);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
//
