import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Muthal Mudichu';
  fullImagePath: string;

  constructor() {
    this.fullImagePath = '/assets/img_home.jpg'
  }
}
