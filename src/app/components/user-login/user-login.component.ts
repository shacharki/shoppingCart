import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  regForm: FormGroup;
  submitted: boolean = false;
  isUserExsist: boolean = false;
  signUpUsers: any[] = [];

  constructor(private router: Router, private fb: FormBuilder) {
    this.regForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }, );
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signUpUsers = JSON.parse(localData);
    }
  }
  onSignUp() {
    this.router.navigate(['/register']);
  }

  onLogin() {
    const isUserExsist = this.signUpUsers.find(m => m.email == this.regForm.value.email && m.password == this.regForm.value.password)
    console.log("4444444",isUserExsist)
    if (isUserExsist != undefined) {
      this.router.navigate(['/home'],{queryParams:{email:isUserExsist.email, name:isUserExsist.name}});
    } else {
      alert('email or password are not correct');
    }
  }
}
