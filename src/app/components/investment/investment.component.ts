import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InvestmentService } from 'src/app/service/investment.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {

  subscriptions: Subscription[] = [];

  constructor(private investmentService: InvestmentService) { }

  get investments(): any[] {
    return this.investmentService.investments;
  }

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    this.listInvestments();
  }

  listInvestments() {
    this.subscription = this.investmentService.getInvestments().subscribe(response => {
      this.investmentService.allInvestments = response.allInvestments
      const mapp = Object.keys(response).map(key => ({type: key, value: response[key]}));

      let obj;
      mapp.map((dados) => {
        obj = {
          nome: dados.value,
        }
      })
      this.investmentService.investments.push(obj);
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0);
  }

}
