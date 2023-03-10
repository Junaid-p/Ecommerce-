import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSigupComponent } from './user-sigup.component';

describe('UserSigupComponent', () => {
  let component: UserSigupComponent;
  let fixture: ComponentFixture<UserSigupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSigupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSigupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
