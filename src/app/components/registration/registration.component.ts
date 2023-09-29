import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;
  submitted = false;

  isDisabled: boolean = true;
  signUpUsers: any[] = [];
  signupObj: any = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router, private fb: FormBuilder) {
    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: [this.passwordMatcValidatin]
    });
  }

  passwordMatcValidatin(form: FormGroup) {
    const password = form.get('password')
    const cpassword = form.get('confirmPassword')
    if (password?.value !== cpassword?.value) {
      return { mismatch: true }
    } else {
      return null
    }
  }



  ngOnInit(): void {
    // const localData = localStorage.getItem('signUpUsers');
    // if (localData != null) {
    //   this.signUpUsers = JSON.parse(localData);
    // }
  }

  submit() {
    console.log(this.regForm.value)
    this.submitted = true;
  }
  reset() {
    this.submitted = false;
    this.regForm.reset();
  }

  onSignUp() {
    let formValue = this.regForm.value;
    console.log("11111", formValue)
    this.signUpUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
    this.signupObj = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }

  }

  onLogin() {
    this.router.navigate(['/login']);
  }

}
