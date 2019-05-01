import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCircularWipeComponent } from './view-circular-wipe.component';

describe('ViewCircularWipeComponent', () => {
  let component: ViewCircularWipeComponent;
  let fixture: ComponentFixture<ViewCircularWipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCircularWipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCircularWipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
