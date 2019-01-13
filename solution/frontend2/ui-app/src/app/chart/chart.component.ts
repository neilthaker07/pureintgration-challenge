import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {

  name : string;
  status : string;

  constructor(private route: ActivatedRoute)) { 
      this.route.queryParams.subscribe(params => {
              this.name = params["name"];
              this.status = params["status"];
          });
    }

  ngOnInit() {
  }

}
