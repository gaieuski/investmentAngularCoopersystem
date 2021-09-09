import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentComponent } from './components/investment/investment.component';
import { WithdrawInvestmentComponent } from './components/withdraw-investment/withdraw-investment.component';

const routes: Routes = [
  {
    path: '',
    component: InvestmentComponent
  },
  {
    path: 'withdrawInvestment/:name',
    component: WithdrawInvestmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
