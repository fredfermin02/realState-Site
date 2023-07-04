import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingeHomePageComponent } from './singe-home-page.component';

describe('SingeHomePageComponent', () => {
  let component: SingeHomePageComponent;
  let fixture: ComponentFixture<SingeHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingeHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingeHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
