import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDuesComponent } from './set-dues.component';

describe('SetDuesComponent', () => {
  let component: SetDuesComponent;
  let fixture: ComponentFixture<SetDuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetDuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
