import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-image-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-image-carousel.html',
  styleUrl: './testimonial-image-carousel.scss',
})
export class TestimonialImageCarousel implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  @Input() title: string = '';

  currentIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    if (this.images.length > 1) {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 10000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
