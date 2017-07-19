import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentInfoFormComponent } from './consent-info-form.component';

describe('ConsentInfoFormComponent', () => {
  let component: ConsentInfoFormComponent;
  let fixture: ComponentFixture<ConsentInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
