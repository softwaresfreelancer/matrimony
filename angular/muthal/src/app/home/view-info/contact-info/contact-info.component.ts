import { Component, OnInit } from '@angular/core';
import { IContact } from '../../../dataTypes/contact';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  pageTitle: string = 'Contact Information';
  showInformation: boolean = false;
  errorMessage: string;
  showCount: number;

  contacts: IContact[] = [];
  constructor() {
    this.showCount = 0;
    this.contacts = [{
      "Name": "nishanth",
      "Address": "bangalore",
      "Occupation": "software engineer",
      "PhoneNumber": "9494948246",
    }];
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.showCount =0;
    this.showInformation = false;
  }


  toggleInformation(): void {
    if (!this.showInformation) {
      this.showCount++;
    }
    this.showInformation = !this.showInformation;
  }
}
