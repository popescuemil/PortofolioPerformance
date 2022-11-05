import { Component } from '@angular/core';

const USER_DATA = [
    {
        ticker: 'AAPL',
        date: "2022-10-03",
        units: 36,
        price: 140.13,
    },
    {
        ticker: 'NFLX',
        date: "2022-10-03",
        units: 36,
        price: 190.79,
    },
    {
        ticker: 'GOOGL',
        date: "2022-10-03",
        units: 10,
        price: 180.62,
    },
    {
        ticker: 'TSLA',
        date: "2022-10-03",
        units: 10,
        price: 100.14,
    },
];

const COLUMNS_SCHEMA = [
    {
        key: 'ticker',
        label: 'Ticker',
    },
    {
        key: 'date',
        type: 'date',
        label: 'Data Date',
    },
    {
        key: 'units',
        type: 'number',
        label: 'Units Held',
    },
    {
        key: 'price',
        type: 'text',
        label: 'Price ($)',
    },
    {
        key: 'value',
        type: 'holdingValue',
        label: 'Holding Value ($)',
    },
    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    },
];

@Component({
    selector: 'table-component',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent {
    displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
    dataSource = USER_DATA;
    columnsSchema: any = COLUMNS_SCHEMA;

    getTotal(element:any) {
        return (parseFloat(element.units) * parseFloat(element.price)).toFixed(2);
    }
}