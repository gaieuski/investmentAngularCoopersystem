import {HttpClient, HttpClientModule} from '@angular/common/http'
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { InvestmentService } from './service/investment.service';
import { WithdrawInvestmentComponent } from './components/withdraw-investment/withdraw-investment.component';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    InvestmentComponent,
    WithdrawInvestmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
     },
     {
       provide: DEFAULT_CURRENCY_CODE,
       useValue: 'BRL'
     },
    HttpClient, 
    InvestmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
