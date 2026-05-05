import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialImageCarousel } from './testimonial-image-carousel';

describe('TestimonialImageCarousel', () => {
  let component: TestimonialImageCarousel;
  let fixture: ComponentFixture<TestimonialImageCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialImageCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialImageCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
