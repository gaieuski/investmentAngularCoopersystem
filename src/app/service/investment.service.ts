import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  private url: string = environment.apiUrl
  private _investments: any[] = [];
  private _allInvestments: string = '';

  constructor(private http: HttpClient) { }

  get investments(): any[] {
    return this._investments;
  }

  set investments(investments: any[]) {
    this._investments = investments;
  }

  get allInvestments(): string {
    return this._allInvestments
  }

  set allInvestments(allInvestments: string) {
    this._allInvestments = allInvestments;
  }
  
  getInvestments(): Observable<any> {
    const url = `${this.url}`
    return this.http.get<any>(url);
  }
}
