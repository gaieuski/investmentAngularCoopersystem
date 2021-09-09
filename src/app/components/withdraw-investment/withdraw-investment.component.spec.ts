import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawInvestmentComponent } from './withdraw-investment.component';

describe('WithdrawInvestmentComponent', () => {
  let component: WithdrawInvestmentComponent;
  let fixture: ComponentFixture<WithdrawInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
