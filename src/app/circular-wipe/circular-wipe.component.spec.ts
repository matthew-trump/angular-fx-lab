import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularWipeComponent } from './circular-wipe.component';

describe('CircularWipeComponent', () => {
  let component: CircularWipeComponent;
  let fixture: ComponentFixture<CircularWipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularWipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularWipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
