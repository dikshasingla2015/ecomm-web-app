import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set previous URL', () => {
    const msg = '/home';
    service.setPreviousURL(msg);
    service.getPreviousURL().subscribe(res => expect(res).toEqual(msg));
  });

  it('should get previous URL', () => {
    service.getPreviousURL().subscribe(res => expect(res).toEqual(''));
  });

});
