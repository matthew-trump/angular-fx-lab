import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDotsComponent } from './view-dots.component';

describe('ViewDotsComponent', () => {
  let component: ViewDotsComponent;
  let fixture: ComponentFixture<ViewDotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
