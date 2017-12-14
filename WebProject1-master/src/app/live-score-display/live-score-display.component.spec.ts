import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveScoreDisplayComponent } from './live-score-display.component';

describe('LiveScoreDisplayComponent', () => {
  let component: LiveScoreDisplayComponent;
  let fixture: ComponentFixture<LiveScoreDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveScoreDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveScoreDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
