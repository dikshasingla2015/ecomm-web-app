import { TestBed } from '@angular/core/testing';
import { AuthService } from '../core/services/auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue:
          {
            isAuthenticated: () => true
          }
        },
        AuthService
      ],
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(AuthGuard);

  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
