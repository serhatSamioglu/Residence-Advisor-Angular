import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignJanitorComponent } from './assign-janitor.component';

describe('AssignJanitorComponent', () => {
  let component: AssignJanitorComponent;
  let fixture: ComponentFixture<AssignJanitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignJanitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignJanitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
