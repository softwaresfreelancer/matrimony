import { Component, OnInit, Input } from '@angular/core';
import { IRelativeInfo } from '../../../dataTypes/RelativeInfo';

@Component({
  selector: 'app-relative-info',
  templateUrl: './relative-info.component.html',
  styleUrls: ['./relative-info.component.css']
})
export class RelativeInfoComponent implements OnInit {

  @Input('relative') element: {
    Relation: string,
    Name: string;
    Address: string;
    Occupation: string;
    PhoneNumber: string;
  };
  constructor() {

  }

  ngOnInit() {
  }

}
