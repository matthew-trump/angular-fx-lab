import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStaggerComponent } from './view-stagger.component';

describe('ViewStaggerComponent', () => {
  let component: ViewStaggerComponent;
  let fixture: ComponentFixture<ViewStaggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStaggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
