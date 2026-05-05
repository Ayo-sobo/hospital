import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  stats = [
    { value: '200+', label: 'Bed Capacity' },
    { value: '15+', label: 'Specialties' },
    { value: '24/7', label: 'Emergency Care' },
    { value: '10k+', label: 'Lives Saved' },
  ];
}
