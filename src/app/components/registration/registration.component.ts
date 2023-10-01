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
  submitted: boolean = false;
  isUserExsist: boolean = false;
  signUpUsers: any[] = [];

  constructor(private router: Router, private fb: FormBuilder) {
    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: [this.passwordMatcValidatin, this.uppercaseValidator],
    });
  }
  hide = true;
  hidec = true;
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signUpUsers = JSON.parse(localData);
    }
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

  uppercaseValidator(form: FormGroup) {
    const password = form.get('password')
    if (!/[A-Z]/.test(password?.value)) {
      return { uppercase: true }
    } else {
      return null
    }
  }

  userExsistValidator(email: string) {
    const isUserExsist = this.signUpUsers?.find(m => m.email == email)
    return isUserExsist
  }

  submit() {
    this.regForm.value
    if (this.userExsistValidator(this.regForm.value.email)) {
      this.isUserExsist = true
      alert("User already exist")
    } else {
      this.isUserExsist = false
      this.submitted = true;
      let formValue = this.regForm.value;
      this.signUpUsers.push(formValue);
      localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
      alert("registration succeeded")
      this.reset();
      this.router.navigate(['/login']);
    }
  }

  reset() {
    this.submitted = false;
    this.regForm.reset();
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

}
