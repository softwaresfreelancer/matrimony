import { Component, OnInit, Input } from '@angular/core';
import { IUserInfo } from '../../dataTypes/UserInfo';
import { UserInfoService } from '../../services/userInfo.service';
import { IUser } from '../../dataTypes/user';
import { Time } from '@angular/common';
import { IRelativeInfo } from '../../dataTypes/RelativeInfo';

@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.css']
})
export class ViewInfoComponent implements OnInit {
  private _userInfoService;
  private errorMessage: string;
  @Input() user: IUser;
  userJson: IUserInfo[] = [];
  userInfos: IUserInfo[] = [];

  relatives = [];

  constructor(private userInfoService: UserInfoService) {
    console.log("constructor called");
    this._userInfoService = userInfoService;

  }

  ngOnInit() {

    this._userInfoService.getUserInfo(this.user)
      .subscribe(response => {
        this.userJson = response;
        this.userInfos = this.userJson;

        this.relatives.push(
          {
            Relation: this.userInfos[0].Father['Relation'] as string,
            Name: this.userInfos[0].Father['Name'] as string,
            Address: this.userInfos[0].Father['Address'] as string,
            Occupation: this.userInfos[0].Father['Occupation'] as string,
            PhoneNumber: this.userInfos[0].Father['PhoneNumber'] as string,
          },
          {
            Relation: this.userInfos[0].Mother['Relation'] as string,
            Name: this.userInfos[0].Mother['Name'] as string,
            Address: this.userInfos[0].Mother['Address'] as string,
            Occupation: this.userInfos[0].Mother['Occupation'] as string,
            PhoneNumber: this.userInfos[0].Mother['PhoneNumber'] as string,
          },
          {
            Relation: this.userInfos[0].Guardian['Relation'] as string,
            Name: this.userInfos[0].Guardian['Name'] as string,
            Address: this.userInfos[0].Guardian['Address'] as string,
            Occupation: this.userInfos[0].Guardian['Occupation'] as string,
            PhoneNumber: this.userInfos[0].Guardian['PhoneNumber'] as string,
          }
        );

      },
        error => this.errorMessage = <any>error);

  }
}
