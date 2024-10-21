import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  // isEmailvalid: boolean = false;
  // isEmailvalid: boolean | undefined;

  validateEmail(email: string): boolean {
    const emailPatern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // console.log(emailPatern.test(email));
    return emailPatern.test(email);
  }
  // emailForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.emailForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]]
  //   });
  // }

  // get emailControl() {
  //   return this.emailForm.get('email');
  // }

  // onSubmitx() {
  //   if (this.emailForm.valid) {
  //     console.log('Email:', this.emailForm.value.email);
  //   } else {
  //     console.log('Form is invalid:', this.emailForm.errors);
  //   }
  // }
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  onClick() {
    console.log('Hello world');

  }

  // simple submit
  onSubmit() {
    console.log(this.email, this.password);
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/dashboard']);

    } else {
      alert('salah govlok');
    }
    console.log('isAuth?', this.authService.isAuth);
  }


}

// When the form is invalid (e.g., a required field is empty),
// 'disabled-button' is applied when the form is invalid.
// 'active' is applied when the form is valid.
