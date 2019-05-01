import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledDotsComponent } from './styled-dots.component';

describe('StyledDotsComponent', () => {
  let component: StyledDotsComponent;
  let fixture: ComponentFixture<StyledDotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledDotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
