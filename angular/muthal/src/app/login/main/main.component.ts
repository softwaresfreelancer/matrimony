import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Muthal Mudichu';
  fullImagePath: string;

  constructor() {
    this.fullImagePath = '/assets/img_home.jpg'
  }

  ngOnInit() {
  }

}
