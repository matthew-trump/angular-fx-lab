import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnterLeaveComponent } from './view-enter-leave.component';

describe('ViewEnterLeaveComponent', () => {
  let component: ViewEnterLeaveComponent;
  let fixture: ComponentFixture<ViewEnterLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEnterLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEnterLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
