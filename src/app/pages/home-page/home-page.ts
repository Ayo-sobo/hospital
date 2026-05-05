import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { ServicesComponent } from '../../components/services/services';
import { AboutComponent } from '../../components/about/about';
import { TestimonialsComponent } from '../../components/testimonials/testimonials';
import { GalleryComponent } from '../../components/gallery/gallery';
import { Branches } from '../../components/branches/branches';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    TestimonialsComponent,
    GalleryComponent,
    Branches,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePageComponent {}
