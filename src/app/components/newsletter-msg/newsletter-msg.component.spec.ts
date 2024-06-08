import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterMsgComponent } from './newsletter-msg.component';

describe('NewsletterMsgComponent', () => {
  let component: NewsletterMsgComponent;
  let fixture: ComponentFixture<NewsletterMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
