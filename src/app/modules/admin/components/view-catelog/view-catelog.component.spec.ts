import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCatelogComponent } from './view-catelog.component';

describe('ViewCatelogComponent', () => {
  let component: ViewCatelogComponent;
  let fixture: ComponentFixture<ViewCatelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCatelogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCatelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
