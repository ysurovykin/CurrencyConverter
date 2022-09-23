import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class Header{
    @Input() currencies: any = {}
    today = new Date().toLocaleDateString()

    calculateCurrencyFromBase(fromCurrency: string, toCurrency: string) {
        return (this.currencies[toCurrency] / this.currencies[fromCurrency]).toFixed(4)
    }
}