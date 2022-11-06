import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { resetFakeAsyncZone } from "@angular/core/testing";
import { DataModel } from "./data.model";

@Injectable()

export class DataService {
    public baseAPIURL: string = environment.APIURL + 'getData';


    constructor(private http: HttpClient) {
    }

    getSharesData(ticker: string, startDate: string, endDate: string) {

        // let promise = new Promise((resolve, reject) => {
        //     let apiURL = `${this.baseAPIURL}?term=${term}&media=music&limit=20`;
        //     resolve(this.http.get(apiURL))
        // }).then(
        //         res => {
        //           resolve(res);
        //         }
        //       );

        //   return promise;

        let data = [];


        const promise = new Promise<void>((resolve, reject) => {
            const apiURL = `${this.baseAPIURL}/${ticker}/${startDate}/${endDate}`;
            data = [];

            this.http.get<DataModel[]>(apiURL).subscribe({
                next: (res: any) => {
                    data = res.map((res: any) => {
                        return new DataModel(ticker, res.date, res.close);
                    });
                    resolve(data);
                },
                error: (err: any) => {
                    reject(err);
                }
            });
        });
        return promise;
    }
}