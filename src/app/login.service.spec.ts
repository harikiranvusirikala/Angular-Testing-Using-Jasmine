import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products-list/products-list.component';


describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, ProductsListComponent],
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    })
      .compileComponents();
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController)

  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of users', () => {
    const dummyData = {
      users: [
        { username: 'user', password: 'user' },
        { username: 'admin', password: 'admin' }
      ]
    };

    service.getUsers().subscribe((data) => {
      expect(data).toEqual(dummyData.users);
    });

    const req = httpMock.expectOne('assets/db.json');
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
    httpMock.verify();
  })

  it('should return an array of mobiles ', () => {
    const dummyData = {
      mobiles: [
        {
          "productId": 1,
          "productName": "Samsung Galaxy Note 7",
          "productCode": "MOB-120",
          "description": "64GB, Coral Blue",
          "price": 25000
        },
        {
          "productId": 2,
          "productName": "Mi Note 7",
          "productCode": "MOB-124",
          "description": "64GB, Gold",
          "price": 20000
        }
      ]
    };

    service.getMobileData().subscribe((data) => {
      expect(data).toEqual(dummyData.mobiles);
    });

    const req = httpMock.expectOne('assets/mobiles.json');
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
    httpMock.verify();
  })


});
``