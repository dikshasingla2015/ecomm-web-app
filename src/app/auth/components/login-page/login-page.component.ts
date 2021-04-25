import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { logindetails } from 'src/app/core/models/logindetails.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  message!: string;
  roles: string[] = [];
  userNameControl!: FormControl;
  passwordControl!: FormControl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userNameControl = new FormControl('', [Validators.required, Validators.email]);
    this.passwordControl = new FormControl('', [Validators.required, Validators.minLength(5),
    Validators.maxLength(8)]);
    this.loginForm = new FormGroup({
      username: this.userNameControl,
      password: this.passwordControl
    });
  }

  onLoginFormSubmit() {
    const user: logindetails = this.loginForm.value as logindetails;
    this.authService.login(user).subscribe(
      res => {
        this.router.navigateByUrl('/placeorder/cart');
      }, (error) => {
        this.message = "Invalid Login Credentials";
        this.loginForm.reset();
      });
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

}
