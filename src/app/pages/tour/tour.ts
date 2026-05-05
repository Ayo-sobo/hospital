import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour.html',
  styleUrl: './tour.scss',
})
export class Tour {
  hospitalImages = [
    {
      url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1634224810/sal%20images/Hospital_Picture.jpg',
    },
    {
      url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1633350819/sal%20images/IMG_0518.jpg',
    },
    {
      url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1633350433/sal%20images/DSC00373.jpg',
    },
    {
      url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1635271242/sal%20images/WhatsApp_Image_2021-10-26_at_6.57.09_PM.jpg',
    },
    {
      url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1633350393/sal%20images/DSC00364.jpg',
    },
    {
      url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1633350351/sal%20images/Capture_1_copy.jpg',
    },
    {
      url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1635271433/sal%20images/WhatsApp_Image_2021-10-26_at_6.58.05_PM.jpg',
    },
    { url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1633350054/sal%20images/55.jpg' },
  ];

  theatreImages = [
    {
      url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1633355296/sal%20images/Theater.jpg',
    },
    {
      url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1633355345/sal%20images/IMG_7897.jpg',
    },
    {
      url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1633355622/sal%20images/IMG-20210527-WA0005.jpg',
    },
    {
      url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1633355392/sal%20images/IMG_3224.jpg',
    },
    {
      url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1633355484/sal%20images/C0071.MP4.Still001.jpg',
    },
    {
      url: 'https://res.cloudinary.com/sayil/image/upload/q_50/v1633350090/sal%20images/IMG_0796.jpg',
    },
  ];
}
