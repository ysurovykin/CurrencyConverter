import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { ICurrency } from "../models/ICurrency";

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<ICurrency>('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json')
    }
}