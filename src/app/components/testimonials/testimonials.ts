import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialImageCarousel } from './testimonial-image-carousel/testimonial-image-carousel';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TestimonialImageCarousel],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  activeIndex = 0;
  private intervalId: any;

  testimonials = [
    {
      name: 'Emmanuel Okereke',
      procedure: 'Kidney Transplant',
      location: 'Port Harcourt',
      color: '#0a7abf',
      quote:
        'I can move again, I can even dance. From constant dialysis to full health — all right here in Nigeria. There is no need to travel abroad for treatment. Everything you need is here at Savealife Hospital. I am a living witness.',
      images: ['assets/Testimonial1.pdf-image-002.jpg', 'assets/Testimonial1.pdf-image-000.png'],
    },
    {
      name: 'Taiwo Moses',
      procedure: 'Cardio Intervention',
      location: 'Lagos State',
      color: '#075d96',
      quote:
        "Before I came here, I couldn't breathe well. Three blocked arteries. I was referred to Egypt not knowing my solution was right here. The doctors were incredible — I was fully conscious during the operation. I am a testimony.",
      images: ['assets/Testimonial2heart.png'],
    },
    {
      name: 'Ifeoma Agbapulonwu',
      procedure: 'Knee Replacement Surgery',
      location: 'Anambra',
      color: '#1aade0',
      quote:
        "If this is a dream, may God not allow me to wake up because I feel so good. I feel so calm as if I'm living in another world. Now I have no pain. I can walk anywhere I want. I can even do exercises. I am forever grateful.",
      images: ['assets/Testimonial3.pdf-image-000.png'],
    },
    {
      name: 'Sambo Briggs',
      procedure: 'IVF & Assisted Fertility',
      location: 'Rivers State',
      color: '#0a7abf',
      quote:
        'We searched for a child for 34 years. We went from hospital to hospital with no success until God directed our steps to Savealife. I came in as an individual but went home with triplets — 2 boys and a girl. Unbelievable but God intervened.',
      images: ['assets/Testimonial4.pdf-image-000.png'],
    },
    {
      name: 'Joy Ijeoma Onuh',
      procedure: 'Fibroid Surgery',
      location: 'Enugu',
      color: '#075d96',
      quote:
        "I carried an 11kg fibroid for 7 years. It took just one hour and three minutes. I still show people the fibroid and they wonder which hospital did this — and I tell them it's right here in Nigeria at Savealife Mission Hospital.",
      images: ['assets/Testimonial5.pdf-image-002.jpg', 'assets/Testimonial5.pdf-image-000.png'],
    },
  ];

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, 10000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  goTo(index: number): void {
    this.activeIndex = index;
  }
}
