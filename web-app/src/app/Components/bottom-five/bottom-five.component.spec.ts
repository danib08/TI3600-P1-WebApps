import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomFiveComponent } from './bottom-five.component';

describe('BottomFiveComponent', () => {
  let component: BottomFiveComponent;
  let fixture: ComponentFixture<BottomFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
