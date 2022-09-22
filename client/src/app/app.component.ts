import { Component, OnInit } from '@angular/core';
import { ICurrency } from './models/ICurrency';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currencies: ICurrency;
  currencyNames: string[] = [];

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.currencyService.getAll().subscribe(result => {
      this.currencies = result.eur;
      this.currencyNames = Object.keys(result.eur)
    })
  }
}
