import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginDetails } from 'src/app/core/models/logindetails.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NavigationService } from 'src/app/core/services/navigation/navigation.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  previousUrl = '';

  loginForm!: FormGroup;

  message!: string;
  userNameControl!: FormControl;
  passwordControl!: FormControl;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly navigationService: NavigationService,
    private readonly translateService: TranslateService) { }

  ngOnInit(): void {
    this.userNameControl = new FormControl('', [Validators.required, Validators.email]);
    this.passwordControl = new FormControl('', [Validators.required]);
    this.loginForm = new FormGroup({
      username: this.userNameControl,
      password: this.passwordControl
    });
  }

  onLoginFormSubmit(): void {
    const user: LoginDetails = this.loginForm.value as LoginDetails;
    this.userService.getUserData(user.username, user.password).subscribe(res => {
      if (res !== undefined) {
        this.authService.login(user).subscribe(
          () => {
            this.navigationService.getPreviousURL().subscribe(data => {
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
        this.message = this.translateService.instant('LOGIN.INVALID_CREDS');
        this.loginForm.reset();
      }
    }, (error) => {
      console.log(error);
    });
  }

  getControlValidationClasses(control: FormControl): any {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

}
