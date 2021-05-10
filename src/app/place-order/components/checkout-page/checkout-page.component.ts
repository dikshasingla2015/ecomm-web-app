import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { Cart } from 'src/app/core/models/cart.model';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
  providers: [MessageService]
})
export class CheckoutPageComponent implements OnInit {

  orderDetails: Cart[] = [];

  totalAmount: number = 0;

  userDetailsForm!: FormGroup;

  firstNameControl!: FormControl;
  lastNameControl!: FormControl;
  middleNameControl!: FormControl;
  emailControl!: FormControl;
  mobileNoControl!: FormControl;
  addressControl!: FormControl;
  cityControl!: FormControl;
  stateControl!: FormControl;
  zipCodeControl!: FormControl;

  constructor(private router: Router, private messageService: MessageService,
    private readonly cartService: CartService) { }

  ngOnInit() {

    this.cartService.getCart().subscribe(data => {
      this.orderDetails = data;
    });
    if (this.orderDetails.length === 0) {
      this.router.navigateByUrl('/placeorder/cart');
      return;
    }

    this.totalAmount = this.cartService.getTotalCartPrice();

    this.firstNameControl = new FormControl('', [Validators.required, Validators.minLength(3),
    Validators.pattern('[a-zA-Z ,]+')]);
    this.lastNameControl = new FormControl('', [Validators.required, Validators.minLength(3),
    Validators.pattern('[a-zA-Z ,]+')]);
    this.middleNameControl = new FormControl('', []);
    this.emailControl = new FormControl('', [Validators.required, Validators.email]);
    this.mobileNoControl = new FormControl('', [Validators.required, Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$')]);
    this.addressControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
    this.cityControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]+')]);
    this.stateControl = new FormControl('', [Validators.required]);
    this.zipCodeControl = new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]);

    this.userDetailsForm = new FormGroup({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      middleName: this.middleNameControl,
      email: this.emailControl,
      mobileNo: this.mobileNoControl,
      address: this.addressControl,
      city: this.cityControl,
      state: this.stateControl,
      zipCode: this.zipCodeControl,
    });
  }

  getControlValidationClasses(control: FormControl): any {
    return {
      'is-invalid': control.touched && control.invalid,
      'is-valid': control.touched && control.valid
    };
  }

  onCancelClicked(): void {
    this.userDetailsForm.reset();
    this.router.navigateByUrl('/placeorder/cart');
  }

  onPlaceOrderClicked(): void {
    this.messageService.add({
      severity: 'success', summary: 'Success',
      detail: 'Order Placed Successfully.'
    });
    this.messageService.clear('c');
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

}
