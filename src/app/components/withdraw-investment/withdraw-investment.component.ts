import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { InvestmentService } from 'src/app/service/investment.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-withdraw-investment',
  templateUrl: './withdraw-investment.component.html',
  styleUrls: ['./withdraw-investment.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class WithdrawInvestmentComponent implements OnInit {

  investments: any = null;
  percentVal: number[] = [];
  valTotWithdraw: any[] = [];
  subscriptions: Subscription[] = [];
  valTot: any = null;

  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private investmentService: InvestmentService,
    private modalService: NgbModal) { }

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      if (this.investmentService.investments.length) {
        this.investments = this.investmentService.investments[0].nome.data.listaInvestimentos.find(i => i.nome === params.name)
      }
      for (let i = 0; i < this.investments.acoes.length; i++) {
        const valTot = this.investments.saldoTotalDisponivel * (this.investments.acoes[i].percentual / 100);
        this.percentVal.push(valTot);
      }
    })
  }
  
  sumValue(event: any, id: any){
    const value = event.target.value;

    if(this.valTotWithdraw[id-1] == null) {
        this.valTotWithdraw.push(value);
        if(value > this.percentVal[id-1]){
          alert('Digite um valor menor ou igual a R$ ' + this.percentVal[id-1].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
        }
    }else {
        this.valTotWithdraw.splice((id-1),1,value);
        if(value > this.percentVal[id-1]){
          alert('Digite um valor menor ou igual a R$ ' + this.percentVal[id-1].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
        }
      }

    this.valTotWithdraw = this.valTotWithdraw.map(Number);
    this.valTot = this.valTotWithdraw.reduce((total, currentElement) => total + currentElement)
  }


  open(content){
    this.modalService.open(content);
  }

  closeModal(){
    this.modalService.dismissAll();
  }
  confirmWithdraw() {
    let j = 0;
    for(let i = 0; i <= this.percentVal[i]; i++){
      if(this.valTotWithdraw[i] > this.percentVal[i].toFixed(2)){
        alert('O valor de retirada: ' + this.valTotWithdraw[i].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        + ' referente a ação: ' + this.investments.acoes[i].nome
        + ' é maior do que o valor total de: ' + this.percentVal[i].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
        j++;
      }
    }
    if(this.valTotWithdraw.length === 0){
      alert('Preencher ao menos um valor para a retirada');
      j++;
    } 
    if(j === 0) {
      alert('Saque realizado com sucesso');
      this.closeModal();
      this.goTo();
    }
  }

  goTo(){
    this.router.navigate(['/'])
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0);
  }

}
