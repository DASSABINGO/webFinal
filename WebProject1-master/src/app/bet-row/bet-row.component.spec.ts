import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetRowComponent } from './bet-row.component';

describe('BetRowComponent', () => {
  let component: BetRowComponent;
  let fixture: ComponentFixture<BetRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
