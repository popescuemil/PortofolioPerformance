import { Component, Input, SimpleChanges } from '@angular/core';

const COLUMNS = [
   {
       key: 'Date',
       type: 'date',
       label: 'Data Date',
   },
   {
       key: 'HoldingValue',
       type: 'holdingValue',
       label: 'Holding Value ($)',
   }
];


@Component({
   selector: 'chart-component',
   templateUrl: './chart.component.html',
   styleUrls: ['./chart.component.scss']
})

export class ChartComponent {

   @Input() dataSource: any;

   title = 'PortofolioNav';
   type: any = 'LineChart';
   data: any;

   options = {
      hAxis: {
         title: 'Day'
      },
      vAxis: {
         title: 'Value ($)'
      },
   };
   width = 1200;
   height = 700;

   displayedColumns: string[] = COLUMNS.map((col) => col.key);
   columnsSchema: any = COLUMNS;

   ngOnChanges(changes: SimpleChanges) {
      let data = changes['dataSource'].currentValue;
      this.processData(data);
   }

   processData(data: any) {
      if (data) {
         let dataMap = new Map<string, number>();
         for (let i = 0; i < data.length; i++) {
            if (dataMap.has(data[i].Date)) {
               let value = dataMap.get(data[i].Date);
               if(value){
                  let total = value + Number(data[i].HoldingValue);
                  dataMap.set(data[i].Date, Number(total));
               }
            } else {
               dataMap.set(data[i].Date, Number(data[i].HoldingValue));
            }
         }
         this.data = Array.from(dataMap);
      }
   }
}