import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowInfoFormComponent } from './follow-info-form.component';

describe('FollowInfoFormComponent', () => {
  let component: FollowInfoFormComponent;
  let fixture: ComponentFixture<FollowInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
