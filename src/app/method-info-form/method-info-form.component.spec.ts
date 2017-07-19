import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodInfoFormComponent } from './method-info-form.component';

describe('MethodInfoFormComponent', () => {
  let component: MethodInfoFormComponent;
  let fixture: ComponentFixture<MethodInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
