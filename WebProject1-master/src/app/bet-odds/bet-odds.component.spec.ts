import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetOddsComponent } from './bet-odds.component';

describe('BetOddsComponent', () => {
  let component: BetOddsComponent;
  let fixture: ComponentFixture<BetOddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetOddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetOddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
