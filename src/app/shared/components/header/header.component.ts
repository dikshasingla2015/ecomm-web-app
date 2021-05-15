import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language = '';

  loggedIn: any;

  cart = 0;

  constructor(
    private auth: AuthService,
    private router: Router,
    private readonly cartService: CartService,
    public readonly translate: TranslateService,
    private readonly productService: ProductService) {
    translate.addLangs(['en', 'gr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|gr/) ? browserLang : 'en');

    this.auth.isLoggedIn().subscribe(next => {
      this.loggedIn = next;
    });
    this.cartService.getCart().subscribe(data => {
      this.cart = data.length;
    });
  }

  ngOnInit(): void { }

  signIn(): void {
    this.router.navigate(['/auth/login']);
  }

  signOut(): void {
    this.auth.signOut();
    this.router.navigate(['/home']);
  }

  changeLanguageOnSelect(language: string): void {
    this.translate.use(language);
  }

  searchProductByName(searchText: string): void {
    this.productService.getProductDataByName(searchText);
  }

  searchProductByCategory(category: string): void {
    this.productService.getProductDataByCategory(category);
  }

}
