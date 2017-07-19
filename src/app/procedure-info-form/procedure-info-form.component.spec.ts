import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureInfoFormComponent } from './procedure-info-form.component';

describe('ProcedureInfoFormComponent', () => {
  let component: ProcedureInfoFormComponent;
  let fixture: ComponentFixture<ProcedureInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
