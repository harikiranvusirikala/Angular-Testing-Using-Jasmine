import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;
username:string='';
password:string='';
  credentials: any;
  title = 'Welcome'

  constructor(private lService :LoginService, private formBuilder:FormBuilder,private router:Router){
  
 
 
  this.loginForm = this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]

  })}


  login(){
    this.lService.getUsers().subscribe(data=>{this.credentials=data})
    if(this.loginForm.valid){
      this.username=this.loginForm.get('username')?.value;
      this.password=this.loginForm.get('password')?.value;
      for(let i=0;i<this.credentials.length;i++){
        if(this.credentials[i].username==this.username && this.credentials[i].password==this.password){
          this.router.navigate(['products']);
          break;
        }
        else if(i==this.credentials.length-1){
          alert('Invalid credentials');
        }
      }
    }
  }




  
   
     
   
  


}

