import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbcDisplayComponent } from './bbc-display.component';

describe('BbcDisplayComponent', () => {
  let component: BbcDisplayComponent;
  let fixture: ComponentFixture<BbcDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbcDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbcDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
