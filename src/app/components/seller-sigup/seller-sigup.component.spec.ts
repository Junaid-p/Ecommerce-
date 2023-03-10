import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSigupComponent } from './seller-sigup.component';

describe('SellerSigupComponent', () => {
  let component: SellerSigupComponent;
  let fixture: ComponentFixture<SellerSigupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerSigupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerSigupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
