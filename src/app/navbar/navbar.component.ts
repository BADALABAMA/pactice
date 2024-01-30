import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  btns: string[] = [
    'people',
    'planets',
    'films',
    'species',
    'vehicles',
    'starships',
  ];
}
