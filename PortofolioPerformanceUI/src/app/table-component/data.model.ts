export class DataModel {
    public Ticker: string = '';
    public Date: string;
    public UnitsHeld: number = 10;
    public ClosePrice: number;
    public HoldingValue: number = 0;

    constructor(
        ticker: string,
        date: string,
        close: number
    ) {
        this.Ticker = ticker;
        this.Date = date;
        this.ClosePrice = close;
    }
}