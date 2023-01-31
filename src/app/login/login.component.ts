import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public _loginservice:LoginService,private _router:Router){}
  public loginform:FormGroup=new FormGroup(
    {
      email:new FormControl(),
      password:new FormControl()
    }
  )
  login(){
    console.log(this.loginform.value);
    this._loginservice.login(this.loginform.value).subscribe(
     (data:any)=>{
      alert("login successfully")
      this._router.navigateByUrl("/dashboard");
      sessionStorage.setItem("MY-APP-token",data.token)
     },
     (err:any)=>{
      alert("enter valid detalis")
     } 
    )
  }
}
