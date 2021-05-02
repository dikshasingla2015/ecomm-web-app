import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { logindetails } from 'src/app/core/models/logindetails.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  previousUrl: string = '';
  subscription!: Subscription;

  loginForm!: FormGroup;

  message!: string;
  roles: string[] = [];
  userNameControl!: FormControl;
  passwordControl!: FormControl;

  constructor(private authService: AuthService, private router: Router,
    private readonly userService: UserService,
    private readonly navigationService: NavigationService) { }

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
    this.userService.getUserData(user.username, user.password).subscribe(res => {
      if (res !== undefined) {
        this.authService.login(user).subscribe(
          res => {
            this.subscription = this.navigationService.getPreviousURL().subscribe(data => {
              this.previousUrl = data;
            });
            if (this.previousUrl.includes('home')) {
              this.router.navigateByUrl('/home');
            } else {
              this.router.navigateByUrl('/placeorder/cart');
            }
          }, (error) => {
            console.log(error);
          });
      } else {
        this.message = "Invalid Login Credentials";
        this.loginForm.reset();
      }
    }, (error) => {
      console.log(error);
    });
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
