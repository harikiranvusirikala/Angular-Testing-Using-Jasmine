import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LoginService } from '../login.service';
import { NavigationExtras, Router } from '@angular/router';
import { of } from 'rxjs';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement:DebugElement;

 let mockLoginService:jasmine.SpyObj<LoginService>;
 let mockRouter: jasmine.SpyObj<Router>;

 beforeEach(async () => {

  mockLoginService = jasmine.createSpyObj('LoginService',['getUsers']);
  mockRouter = jasmine.createSpyObj('Router',['navigate'])
 
  await TestBed.configureTestingModule({
    declarations: [ LoginComponent ],
    imports:[FormsModule, ReactiveFormsModule,HttpClientTestingModule ],
    providers:[{provide: LoginService, useValue:mockLoginService},
    {provide:Router, useValue:mockRouter, FormBuilder}]
  })
  .compileComponents();
 
  fixture = TestBed.createComponent(LoginComponent);
  component = fixture.componentInstance;
  debugElement=fixture.debugElement;
  
  
});





  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('userName Field Validity by default', () => {
    let userName = component.loginForm.controls['username']; (1)
    let errors:any;
    errors = userName.errors || {};
    expect(userName.valid).toBeFalsy(); (2)
    expect(errors['required']).toBeTruthy();
  });



  it('userName Field Validity when some value is passed ', () => {
    let errors : any;
    let firstName = component.loginForm.controls['username'];
    firstName.setValue('user')
    errors = firstName.errors || {};
    expect(errors['required']).toBeUndefined();
    expect(firstName.valid).toBeTruthy(); 
  });


  it('Password Field Validity by default', () => {
    let password = component.loginForm.controls['password'];
    let errors:any;
    errors = password.errors || {};
    expect(password.valid).toBeFalsy(); 
    expect(errors['required']).toBeTruthy();
  });

  it('Password Field Validity when some value is passed ', () => {
    let errors : any;
    let password = component.loginForm.controls['password'];
    password.setValue('user')
    errors = password.errors || {};
    expect(errors['required']).toBeUndefined();
    expect(password.valid).toBeTruthy(); 
  });

  it('Register Form Invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
    expect(debugElement.nativeElement.querySelector('button[type="submit"]').disabled).toBeTruthy;
  });



  
  it('Login Form Valid when filled', () => {
    component.loginForm.controls['username'].setValue('user');
    component.loginForm.controls['password'].setValue('user');
    expect(component.loginForm.valid).toBeTruthy();
    expect(debugElement.nativeElement.querySelector('button[type="submit"]').disabled).toBeFalsy;
  });

  it('should call login method',()=>{
    spyOn(component,'login');
    component.login();
    expect(component.login).toHaveBeenCalled();
    
  })

  

  it('should navigate to "products" when login is successful',()=>{
    const fakeCredentials = [{username:'user', password:'user'}];
    mockLoginService.getUsers.and.returnValue(of(fakeCredentials));
    component.loginForm.setValue({username:'user', password:'user'});
    component.login();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['products'])
  })

  it('should not navigate to "products" when login is unsuccessful',()=>{
    const InvalidCredentials = [{username:'user', password:'password'}];
    mockLoginService.getUsers.and.returnValue(of(InvalidCredentials));
    component.loginForm.setValue({username:'user', password:'user'});
    spyOn(window,'alert')
    component.login();
    expect(window.alert).toHaveBeenCalledWith('Invalid credentials')
  })




   
    

   
});









 


  
