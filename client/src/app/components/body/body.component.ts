import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
})
export class Body {

    @Input() currencyNames: string[] = [];
    @Input() currencies: any = {};
    firstCurrencyInfo: FormGroup = new FormGroup({
        currency: new FormControl(0),
        value: new FormControl(0),
        name: new FormControl('')
    })
    secondCurrencyInfo: FormGroup = new FormGroup({
        currency: new FormControl(0),
        value: new FormControl(0),
        name: new FormControl('')
    })
    
    changeCurrency(event: string, fromCurrencyInfo: FormGroup, toCurrencyInfo: FormGroup) {
        this.checkIsFirstAttempt()
        fromCurrencyInfo.get('currency').patchValue(this.currencies[event])
        fromCurrencyInfo.get('value').patchValue(this.parseFloatCurrencyValue(toCurrencyInfo.get('value')?.value, toCurrencyInfo.get('currency')?.value, fromCurrencyInfo.get('currency')?.value));
    }
    changeCurrencyValue(event: any, fromCurrencyInfo: FormGroup, toCurrencyInfo: FormGroup) {
        const inputValue = Number.parseFloat(event?.target.value)
        toCurrencyInfo.get('value').patchValue(this.parseFloatCurrencyValue(inputValue, fromCurrencyInfo.get('currency')?.value, toCurrencyInfo.get('currency')?.value));
    }
    parseFloatCurrencyValue(currencyValue: number, fromCurrency: number, toCurrency: number) {
        return Number.parseFloat((currencyValue / fromCurrency * toCurrency).toFixed(4))
    }
    checkIsFirstAttempt() {
        if ((this.firstCurrencyInfo.get('currency')?.value !== 0 && this.secondCurrencyInfo.get('currency')?.value === 0)
            || (this.firstCurrencyInfo.get('currency')?.value === 0 && this.secondCurrencyInfo.get('currency')?.value !== 0)) {
            this.firstCurrencyInfo.patchValue({ 'value': 1 });
        }
    }
}