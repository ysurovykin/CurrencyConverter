import { Component, Input } from "@angular/core";

interface ICurrencyInfo {
    currency: number
    value: number
}

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
})
export class Body {

    @Input() currencyNames: string[] = [];
    @Input() currencies: any = {};
    firstCurrencyInfo: ICurrencyInfo = {
        currency: 0,
        value: 0
    }
    secondCurrencyInfo: ICurrencyInfo = {
        currency: 0,
        value: 0
    }
    firstCurrencyName: string = '';
    secondCurrencyName: string = '';


    changeCurrency(event: string, fromCurrencyInfo: ICurrencyInfo, toCurrencyInfo: ICurrencyInfo) {
        this.checkIsFirstAttempt()
        fromCurrencyInfo.currency = this.currencies[event]
        fromCurrencyInfo.value = this.parseFloatCurrencyValue(toCurrencyInfo.value, toCurrencyInfo.currency, fromCurrencyInfo.currency)
    }
    changeCurrencyValue(event: number, fromCurrencyInfo: ICurrencyInfo, toCurrencyInfo: ICurrencyInfo) {
        toCurrencyInfo.value = this.parseFloatCurrencyValue(event, fromCurrencyInfo.currency, toCurrencyInfo.currency)
    }
    parseFloatCurrencyValue(currencyValue: number, fromCurrency: number, toCurrency: number) {
        return Number.parseFloat((currencyValue / fromCurrency * toCurrency).toFixed(4))
    }
    checkIsFirstAttempt() {
        if (this.firstCurrencyInfo.currency !== 0 && this.secondCurrencyInfo.currency === 0) {
            this.firstCurrencyInfo.value = 1;
        }
    }
}