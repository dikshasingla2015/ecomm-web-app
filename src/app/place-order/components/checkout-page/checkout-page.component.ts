import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
  providers: [MessageService]
})
export class CheckoutPageComponent implements OnInit {

  registrationForm!: FormGroup;

  firstNameControl!: FormControl;
  lastNameControl!: FormControl;
  middleNameControl!: FormControl;
  emailControl!: FormControl;
  telephoneControl!: FormControl;
  addressControl!: FormControl;
  cityControl!: FormControl;
  stateControl!: FormControl;
  zipCodeControl!: FormControl;

  constructor(private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.firstNameControl = new FormControl('', [Validators.required, Validators.minLength(3),
    Validators.pattern('[a-zA-Z ,]+')]);
    this.lastNameControl = new FormControl('', [Validators.required, Validators.minLength(4),
    Validators.pattern('[a-zA-Z ,]+')]);
    this.middleNameControl = new FormControl('', []);
    this.emailControl = new FormControl('', [Validators.required, Validators.minLength(4),
    Validators.email]);
    this.telephoneControl = new FormControl('', [Validators.required, Validators.maxLength(15),
    Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$')]);
    this.addressControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.cityControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]);
    this.stateControl = new FormControl('', [Validators.required]);
    this.zipCodeControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]);

    this.registrationForm = new FormGroup({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      middleName: this.middleNameControl,
      email: this.emailControl,
      telephone: this.telephoneControl,
      address: this.addressControl,
      city: this.cityControl,
      state: this.stateControl,
      zipCode: this.zipCodeControl,
    });
  }

  onFormSubmit() {
    const newUser = this.registrationForm.value;
    console.log(newUser);

    // this.authService.saveUserDetails(newUser).subscribe(
    //   res => {
    //     this.authService.newUserDetails = res as registrationdetails;
    //     this.router.navigateByUrl('/confirm');
    //   },
    //   error => {
    //     alert("Provided Email Already exist!");
    //     this.registrationForm.reset();
    //     this.router.navigateByUrl('/new');
    //   });
  }

  getControlValidationClasses(control: FormControl) {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

  onCancelClicked() {
    this.registrationForm.reset();
    // this.authService.newUserDetails = null;
    this.router.navigateByUrl('/placeorder/cart');
  }

  onPlaceOrderClicked() {
    this.messageService.add({
      severity: 'success', summary: 'Success',
      detail: 'Order Placed Successfully.'
    });
    this.messageService.clear('c');
  }

}
