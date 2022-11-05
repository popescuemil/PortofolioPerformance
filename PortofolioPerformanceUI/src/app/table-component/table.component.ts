import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { forkJoin } from 'rxjs'

const USER_DATA = [
    {
        ticker: 'AAPL',
        date: "2022-10-03",
        units: 36,
        price: 140,
        value: 360,

    },
    {
        ticker: 'NFLX',
        date: "2022-10-03",
        units: 36,
        price: 190,
        value: 5600,
    },
    {
        ticker: 'GOOGL',
        date: "2022-10-03",
        units: 10,
        price: 180,
        value: 3600,
    },
    {
        ticker: 'TSLA',
        date: "2022-10-03",
        units: 10,
        price: 100,
        value: 4000,
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
        type: 'text',
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
}