import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class Header implements OnInit {
    @Input() currencies: any = {}
    today = new Date().toLocaleDateString()
    ngOnInit(): void {
    }

    calculateUSD() {
        return (this.currencies['usd'] / this.currencies['uah']).toFixed(4)
    }
    calculateEUR() {
        return (this.currencies['eur'] / this.currencies['uah']).toFixed(4)
    }
    calculatePLN() {
        return (this.currencies['pln'] / this.currencies['uah']).toFixed(4)
    }
    calculateGBP() {
        return (this.currencies['gbp'] / this.currencies['uah']).toFixed(4)
    }
    calculateUAHfromUSD() {
        return (this.currencies['uah'] * this.currencies['usd']).toFixed(4)
    }
}