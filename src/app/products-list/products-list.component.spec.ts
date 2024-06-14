import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListComponent } from './products-list.component';
import { LoginService } from '../login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SortPipe } from '../sort.pipe';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let loginService: jasmine.SpyObj<LoginService>;

  beforeEach(() => {
    const loginServiceSpy = jasmine.createSpyObj('LoginService', ['getMobileData']);
    TestBed.configureTestingModule({
      declarations: [ProductsListComponent,SortPipe],
      imports:[HttpClientTestingModule,FormsModule,ReactiveFormsModule],
      providers:[{ provide: loginService, useValue: loginServiceSpy }]
    });
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit method', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  })
});
