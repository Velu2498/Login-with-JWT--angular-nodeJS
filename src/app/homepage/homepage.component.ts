import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServeService } from '../serve.service';
import {Router} from'@angular/router'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http:HttpClient,private  r :Router ,public ser:ServeService) { 
    setTimeout(() => {

      var data =  localStorage.getItem("token")
      var json={data}
      // console.log(json)
  
      this.http.post("http://localhost:3500/afterlogin",json)
      .subscribe(
        (res:any)=>{ 
        // console.log(res.status)
        alert(res.mssg);
        if(res.mssg == "permitted"){
          ser.auth =true;
          console.log(ser.auth)
        }
        else{
          this.r.navigate(['/error']) 
        }
  
      }, error => {
          console.log(error);
      } 
      
      )
        
      }, 1000);

  }

  ngOnInit() {
  }



}
