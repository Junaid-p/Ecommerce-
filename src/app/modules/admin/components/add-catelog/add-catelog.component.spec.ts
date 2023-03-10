import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatelogComponent } from './add-catelog.component';

describe('AddCatelogComponent', () => {
  let component: AddCatelogComponent;
  let fixture: ComponentFixture<AddCatelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCatelogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCatelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
