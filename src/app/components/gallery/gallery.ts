import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class GalleryComponent {
  signatureError = false;
  sections = [
    {
      label: 'Our Vision',
      paragraphs: [
        'To make Nigeria a global healthcare destination through provision of world-class healthcare services powered by superior technology in medicine.',
        'To become the first fully digitalized hospital in the world powered by our patented software and hardware technology.',
      ],
    },
    {
      label: 'Our Mission',
      paragraphs: [
        'To bring Healthcare of international standards within the reach of every individual in Africa.',
        'To bring Expertise and Hospitality in the atmosphere of Divine healing.',
      ],
    },
    {
      label: 'Our Operating Philosophy',
      paragraphs: [
        'To reverse medical tourism towards Africa through unparalleled world class healthcare services and the provision of continuous improvement to better our best at all times.',
      ],
    },
  ];
}
