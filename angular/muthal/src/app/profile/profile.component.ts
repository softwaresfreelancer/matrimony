import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../dataTypes/user';
import { UsersService } from '../services/users.service';
import { IUserInfo } from '../dataTypes/UserInfo';
import { UserInfoService } from '../services/userInfo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private _usersService;
  private _userInfoService;
  private _listFilter: string;
  private errorMessage: string;

  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(v: string) {
    this._listFilter = v;
    console.log(this._listFilter);
    this.filterdUsers = this.listFilter ? this.performFilter(this.listFilter) : this.users;
  }

  filterdUsers: IUser[] = [];
  users: IUser[] = [];
  userInfo: IUserInfo[] = [];

  
  constructor(
    private usersService: UsersService,
    private userInfoService: UserInfoService) {
    this._usersService = usersService;
    this._userInfoService = userInfoService;
  }

  ngOnInit() {

    this._usersService.getUsers()
      .subscribe(response => {
        this.users = response;
        this.filterdUsers = this.users;
      },
        error => this.errorMessage = <any>error);

    this._userInfoService.getUserInfo()
      .subscribe(response => {
        this.userInfo = response;
        console.log(this.userInfo);
      },
        error => this.errorMessage = <any>error);
  }

  performFilter(filterBy: string): IUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user: IUser) => user.UserName.toLocaleLowerCase().indexOf(filterBy) != -1);
  }

}
