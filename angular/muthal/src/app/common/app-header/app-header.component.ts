import { Component, OnInit, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import {  MatToolbarModule } from '@angular/material';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  providers: [MatMenuModule,MatToolbarModule]
})

export class AppHeaderComponent implements OnInit {

  @Input() public title: string;
  @Input() public isUserLoggedIn: boolean;

  constructor() { }

  ngOnInit() {
  }

}
