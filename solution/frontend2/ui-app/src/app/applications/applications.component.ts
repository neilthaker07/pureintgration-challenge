import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  name: string = "neil-application-sjsu"; 
  result : object[];
  
  /*object[]=[{"name":"app1","status":"critical"},{"name":"app2","status":"major"},
  {"name":"app3","status":"ok"}];*/

  constructor(private http: HttpClient, private router: Router) { }
/*
  btnClick= function () {
          this.router.navigateByUrl('/chart');
  };*/

  ngOnInit() {
    let obs = this.http.get('http://localhost:3000/answer');
    obs.subscribe((res) => {
      console.log(res);

      const values = Object.keys(res).map(key => res[key]);
      console.log(values);
      for(var i=0;i<1;i++)
      {
          let vals = values[0];
          let temp=[];
          for(var j=0;j<vals.length;j++)
          {
            console.log(vals[j]);
            temp[j] = vals[j];
          }
          this.result = temp;
      }

      console.log("YAY");
      console.log(this.result);


    });
  }
}