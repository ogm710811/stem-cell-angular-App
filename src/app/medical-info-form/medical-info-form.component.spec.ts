import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalInfoFormComponent } from './medical-info-form.component';

describe('MedicalInfoFormComponent', () => {
  let component: MedicalInfoFormComponent;
  let fixture: ComponentFixture<MedicalInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
