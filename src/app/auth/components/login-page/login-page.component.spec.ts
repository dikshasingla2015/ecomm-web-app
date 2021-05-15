import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { of } from 'rxjs';
import { HttpLoaderFactory } from 'src/app/app.module';
import { AuthService } from 'src/app/core/services/auth.service';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { UserService } from 'src/app/core/services/user.service';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let mockAuthService: AuthService;
  let mockUserService: UserService;
  let mockNavigationService: NavigationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoginPageComponent
      ],
      providers: [
        AuthService,
        NavigationService,
        UserService
      ],
      imports: [
        ReactiveFormsModule,
        ButtonModule,
        RouterTestingModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    mockUserService = fixture.debugElement.injector.get(UserService);
    spyOn(mockUserService, 'getUserData').and.callFake(() => {
      return of({
        userId: '1',
        userName: 'abc123@nagarro.com',
        phoneNumber: '9834125612',
        password: 'abc123'
      });
    });
    mockAuthService = fixture.debugElement.injector.get(AuthService);
    spyOn(mockAuthService, 'login').and.callFake(() => {
      return of('');
    });
    mockNavigationService = fixture.debugElement.injector.get(NavigationService);
    spyOn(mockNavigationService, 'getPreviousURL').and.callFake(() => {
      return of('/home');
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
