import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  const dummyUsers = [
    {
      userId: '1',
      userName: 'dummy1',
      phoneNumber: '9876787834',
      password: '123456'
    },
    {
      userId: '2',
      userName: 'dummy2',
      phoneNumber: '9867677834',
      password: '654321'
    }
  ];

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<User[]>', () => {
    service.getAllUsers().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyUsers);
    });

    const req = httpTestingController.expectOne(`${service.USER_SERVICE_BASE_URL}/user.json`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });

  it('should return a User', () => {
    service.getUserData('dummy1', '123456').subscribe(users => {
      expect(users.userId).toEqual('1');
      expect(users).toEqual(dummyUsers[0]);
    });

    const req = httpTestingController.expectOne(`${service.USER_SERVICE_BASE_URL}/user.json`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });

});
