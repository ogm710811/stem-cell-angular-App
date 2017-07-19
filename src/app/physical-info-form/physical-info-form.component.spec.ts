import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalInfoFormComponent } from './physical-info-form.component';

describe('PhysicalInfoFormComponent', () => {
  let component: PhysicalInfoFormComponent;
  let fixture: ComponentFixture<PhysicalInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
