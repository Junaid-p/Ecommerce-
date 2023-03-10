import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSellerComponent } from './view-seller.component';

describe('ViewSellerComponent', () => {
  let component: ViewSellerComponent;
  let fixture: ComponentFixture<ViewSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
