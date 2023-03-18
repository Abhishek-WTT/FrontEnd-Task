import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsPopUpComponent } from './user-details-pop-up.component';

describe('UserDetailsPopUpComponent', () => {
  let component: UserDetailsPopUpComponent;
  let fixture: ComponentFixture<UserDetailsPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
