import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrl: './swapi.component.scss',
})
export class SwapiComponent implements OnInit {
  public category: string = '';
  public swapies: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
    this.route.params.subscribe((param) => {
      console.log(param);
      this.category = param['category'];
      this.getCategory(this.category);
      console.log(this.category);
    });
  }

  ngOnInit() {}
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  getCategory(category: string) {
    this.apiService.getUrlByCategory(category).subscribe(
      (data) => {
        this.swapies = data.results;

        console.log(this.swapies);
      },
      (error) => {
        console.error('Error fetching swapies:', error);
      }
    );
  }
}
