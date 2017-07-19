import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabInfoFormComponent } from './lab-info-form.component';

describe('LabInfoFormComponent', () => {
  let component: LabInfoFormComponent;
  let fixture: ComponentFixture<LabInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
