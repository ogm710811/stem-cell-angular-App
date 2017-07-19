import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInfoFormComponent } from './test-info-form.component';

describe('TestInfoFormComponent', () => {
  let component: TestInfoFormComponent;
  let fixture: ComponentFixture<TestInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
