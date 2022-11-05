import { Component } from '@angular/core';

@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})


export class ChartComponent {
    title = 'Average Temperatures of Cities';
    type: any= 'LineChart';
    data = [
       ["Jan",  7.0],
       ["Feb",  6.9],
       ["Mar",  9.5],
       ["Apr",  14.5],
       ["May",  18.2],
       ["Jun",  21.5],
       ["Jul",  25.2],
       ["Aug",  26.5],
       ["Sep",  23.3],
       ["Oct",  18.3],
       ["Nov",  13.9],
       ["Dec",  9.6]
    ];
    options = {   
       hAxis: {
          title: 'Month'
       },
       vAxis:{
          title: 'Temperature'
       },
    };
    width = 1000;
    height = 700;


}