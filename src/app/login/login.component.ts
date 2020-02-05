import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from'@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private r:Router) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    username: new FormControl('',[
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });


  login(){
    console.log(this.loginForm)
    this.http.post("http://localhost:3500/login",this.loginForm.value)
    .subscribe(
      (data:any)=>{ 
      // v.push(data.mess)
      localStorage.setItem("token", data.token );
      // alert(data.token);
      alert(data.mess);
      // console.log(v) 
      if(data.mess=="welcome"){
        this.r.navigate(['/home'])   
      }

    }, 
    error => {
        console.log(error);
    } 
    
    )
  }
}
