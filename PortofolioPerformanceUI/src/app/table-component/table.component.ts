import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataModel } from './data.model';
import { DataService } from './data.service';

const COLUMNS = [
    {
        key: 'Ticker',
        label: 'Ticker',
    },
    {
        key: 'Date',
        type: 'date',
        label: 'Data Date',
    },
    {
        key: 'UnitsHeld',
        type: 'number',
        label: 'Units Held',
    },
    {
        key: 'ClosePrice',
        type: 'string',
        label: 'Price ($)',
    },
    {
        key: 'HoldingValue',
        type: 'holdingValue',
        label: 'Holding Value ($)',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    },
];

const TICKER_LIST = [ 'AAPL', 'TSLA', 'MSFT', 'NFLX', 'GOOGL', 'AMZN'];

@Component({
    selector: 'table-component',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent {
    displayedColumns: string[] = COLUMNS.map((col) => col.key);
    dataSource:  DataModel[] = [];
    columnsSchema: any = COLUMNS;

    constructor(private dataService: DataService){
    }

    ngOnInit(){

        //on api side I have hardocoded some date values because yahoo finance api
        //encodes the dates somehow so cannot use normal date, for more info check comment on api side
        //the below dates are not used, but I have put them here in case there is need for an api switch
        const currentDate = '06-11-2022';
        const startDate = '03-10-2022';
        let promises_array: Array<any> = [];

        TICKER_LIST.forEach(element => {
            promises_array.push(this.dataService.getSharesData(element, startDate, currentDate));
        });

        Promise.all(promises_array).then(results => {
            //we flatten and sort the array by date in asc order
            this.dataSource = results.flat(1).sort((a,b) => (a.Date < b.Date) ? -1 : 1);
        });
    }

    getTotal(element:any) {
        return (parseFloat(element.UnitsHeld) * parseFloat(element.ClosePrice)).toFixed(2);
    }
}