import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: any;

  cart: number = 0;

  constructor(private auth: AuthService, private router: Router,
    private readonly cartService: CartService) {
    // translate.addLangs(['en', 'fr', 'gr']);
    // translate.setDefaultLang('en');

    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fr|gr/) ? browserLang : 'en');

    this.auth.isLoggedIn().subscribe(next => {
      this.loggedIn = next;
    });
    this.cartService.getCart().subscribe(data => {
      this.cart = data.length;
    });
  }

  ngOnInit(): void { }

  signIn() {
    this.router.navigate(['/auth/login']);
  }

  signOut() {
    this.auth.signOut();
    this.router.navigate(['/home']);
  }

}
