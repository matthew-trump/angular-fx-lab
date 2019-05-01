import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRefTlistComponent } from './template-ref-tlist.component';

describe('TemplateRefTlistComponent', () => {
  let component: TemplateRefTlistComponent;
  let fixture: ComponentFixture<TemplateRefTlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefTlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefTlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
