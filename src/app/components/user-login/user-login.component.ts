import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  signUpUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  loginObj: any = {
    userName: '',
    password: '',
  };
  constructor() {

  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signUpUsers = JSON.parse(localData);
    }
  }
  onSignUp() {
    this.signUpUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  onLogin() {
    const isUserExsist = this.signUpUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password)
    if (isUserExsist != undefined) {
      alert('user login successfully');
    } else {
      alert('worng credentials');

    }

  }
}
