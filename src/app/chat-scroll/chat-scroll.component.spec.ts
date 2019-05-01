import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatScrollComponent } from './chat-scroll.component';

describe('ChatScrollComponent', () => {
  let component: ChatScrollComponent;
  let fixture: ComponentFixture<ChatScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
