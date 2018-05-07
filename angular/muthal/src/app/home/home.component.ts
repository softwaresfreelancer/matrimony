import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../dataTypes/user';
import { UsersService } from '../services/users.service';
import { IUserInfo } from '../dataTypes/UserInfo';
import { UserInfoService } from '../services/userInfo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})

export class HomeComponent implements OnInit {
  private _usersService;
  fullImagePath: string;
  private _listFilter: string;
  private errorMessage: string;

  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(v: string) {
    this._listFilter = v;
    this.filterdUsers = this.listFilter ? this.performFilter(this.listFilter) : this.users;
  }

  filterdUsers: IUser[] = [];
  users: IUser[] = [];


  constructor(private usersService: UsersService) {
    this.fullImagePath = '/assets/img_home.jpg'
    this._usersService = usersService;
  }

  ngOnInit() {

    this._usersService.getUsers()
      .subscribe(response => {
        this.users = response;
        this.filterdUsers = this.users;
      },
        error => this.errorMessage = <any>error);


  }

  performFilter(filterBy: string): IUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user: IUser) => user.UserName.toLocaleLowerCase().indexOf(filterBy) != -1);
  }

  onLoad() {

  }
}
