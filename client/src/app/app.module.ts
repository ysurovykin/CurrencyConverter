import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Body } from './components/body/body.component';
import { Header } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Body
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
