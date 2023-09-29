import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  userForm: FormGroup;
  isDisabled: boolean = true;
  signUpUsers: any[] = [];
  // signupObj: any = {
  //   userName: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // };
  loginObj: any = {
    userName: '',
    password: '',
  };

  constructor(private router: Router, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }



  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signUpUsers = JSON.parse(localData);
    }
  }
  onSignUp() {
    this.router.navigate(['/register']);

    // let formValue = this.userForm.value;
    // console.log("11111",formValue)
    // this.signUpUsers.push(this.signupObj);
    // localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
    // this.signupObj = {
    //   userName: '',
    //   email: '',
    //   password: '',
    //   confirmPassword: ''
    // }
  }

  onLogin() {
    const isUserExsist = this.signUpUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password)
    if (isUserExsist != undefined) {
      alert('user login successfully');
      this.router.navigate(['/home']);
    } else {
      alert('worng credentials');

    }

  }
}
