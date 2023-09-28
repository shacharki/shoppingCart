import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateRegistrationFormsComponent } from './template-registration-forms.component';

describe('TemplateRegistrationFormsComponent', () => {
  let component: TemplateRegistrationFormsComponent;
  let fixture: ComponentFixture<TemplateRegistrationFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateRegistrationFormsComponent]
    });
    fixture = TestBed.createComponent(TemplateRegistrationFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
