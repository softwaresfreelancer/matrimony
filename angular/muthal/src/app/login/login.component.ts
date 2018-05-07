import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MatInputModule]

})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(): void {
    console.log("login success");
    this.router.navigate(['./home']);
  }
}
