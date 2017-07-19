import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionInfoFormComponent } from './condition-info-form.component';

describe('ConditionInfoFormComponent', () => {
  let component: ConditionInfoFormComponent;
  let fixture: ComponentFixture<ConditionInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
