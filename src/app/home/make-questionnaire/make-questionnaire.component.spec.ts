import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeQuestionnaireComponent } from './make-questionnaire.component';

describe('MakeQuestionnaireComponent', () => {
  let component: MakeQuestionnaireComponent;
  let fixture: ComponentFixture<MakeQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
