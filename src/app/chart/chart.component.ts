import { Component, OnInit } from '@angular/core';
//import * as CanvasJS from '../../assets/canvasjs/canvasjs.min.js';
import * as CanvasJS from "canvasjs/dist/canvasjs.min.js";
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var chart = new CanvasJS.Chart("chartContainer", {
      theme: "dark1", // "light2", "dark1", "dark2"
      animationEnabled: false, // change to true		
      title:{
        text: "Basic Column Chart"
      },
      data: [
      {
        // Change type to "bar", "area", "spline", "pie",etc.
        type: "column",
        dataPoints: [
          { label: "apple",  y: 10  },
          { label: "orange", y: 15  },
          { label: "banana", y: 25  },
          { label: "mango",  y: 30  },
          { label: "grape",  y: 28  }
        ]
      }
      ]
    });
    chart.render();
  }

}
