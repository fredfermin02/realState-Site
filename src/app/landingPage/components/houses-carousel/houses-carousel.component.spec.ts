import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesCarouselComponent } from './houses-carousel.component';

describe('HousesCarouselComponent', () => {
  let component: HousesCarouselComponent;
  let fixture: ComponentFixture<HousesCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousesCarouselComponent]
    });
    fixture = TestBed.createComponent(HousesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
