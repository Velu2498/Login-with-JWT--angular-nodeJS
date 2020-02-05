import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http:HttpClient) { 

    setTimeout(() => {

      var data =  localStorage.getItem("token")
      var json={data}
      // console.log(json)
  
      this.http.post("http://localhost:3500/afterlogin",json)
      .subscribe(
        (res:any)=>{ 
        console.log(res.status)
        // alert(res.key);
  
      }, error => {
          console.log(error);
      } 
      
      )
        
      }, 1000);

  }

  ngOnInit() {
  }



}
