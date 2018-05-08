import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgForm } from '@angular/forms';
import { IUserInfo, UserInfo } from '../dataTypes/UserInfo';
import { getLocaleDateTimeFormat, Time } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  data: IUserInfo;
  date : Date;
  constructor() {
    this.date = new Date();
   }

  ngOnInit() {
  }

  onRegister(form: NgForm) {

    const value = form.value;
    const data = new UserInfo(
      this.date,
      value.name as string,
      value.sex as string,
      value.dob as Date,
      value.height as number,
      value.complexion as string,
      value.educationOrQualification as string,
      value.star as string,
      value.pdm as string,
      value.dhosham as boolean,
      value.dhoshamType as string,
      value.birthtime as Time,
      value.birthplace as string,
      value.occupation as string,
      value.designation as string,
      value.companyname as string,
      value.salary as number,
      value.phoneNumber as string,
      value.brothers as number,
      value.brothersmarried as boolean,
      value.sisters as number,
      value.sistersmarried as boolean,
      value.descriptionOfReq as string,
      value.communityname as string,
      value.address as string,
      value.fathername as string,
      value.mothername as string,
      value.guardianname as string,
    );


    console.log(data);
  }

}
