import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
})
export class Body {

    @Input() currencyNames: string[] = [];
    @Input() currencies: any = {};
    firstCurrency: number = 0;
    secondCurrency: number = 0;
    firstCurrencyName: string = '';
    secondCurrencyName: string = '';
    firstCurrencyValue: number = 0;
    secondCurrencyValue: number = 0;

    changeFirstCurrency(event: any) {
        if (this.firstCurrency === 0 && this.secondCurrency !== 0) {
            this.firstCurrencyValue = 1;
        }
        this.firstCurrency = this.currencies[event]
        this.firstCurrencyValue = Number.parseFloat((this.secondCurrencyValue / this.secondCurrency * this.firstCurrency).toFixed(4))
    }
    changeSecondCurrency(event: any) {
        if (this.firstCurrency !== 0 && this.secondCurrency === 0) {
            this.firstCurrencyValue = 1;
        }
        this.secondCurrency = this.currencies[event]
        this.secondCurrencyValue = Number.parseFloat((this.firstCurrencyValue / this.firstCurrency * this.secondCurrency).toFixed(4))
    }
    changeFirstCurrencyValue(event: number) {
        this.secondCurrencyValue = Number.parseFloat((event * this.secondCurrency / this.firstCurrency + Number.EPSILON).toFixed(4))
    }
    changeSecondCurrencyValue(event: number) {
        this.firstCurrencyValue = Number.parseFloat((event * this.firstCurrency / this.secondCurrency + Number.EPSILON).toFixed(4))
    }
}