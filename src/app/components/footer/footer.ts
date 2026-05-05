import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Take a Tour', path: '/tour' },
    { label: 'Book Appointment', path: '/appointment' },
    { label: 'Contact Us', path: '/contact' },
  ];

  services = [
    'Interventional Cardiology',
    'Kidney Transplant',
    'Robotic Knee Surgery',
    'IVF & Fertility',
    'Laser Surgeries',
    'Obstetrics & Gynaecology',
    'Emergency & Trauma',
    'Orthopaedics',
  ];

  locations = [
    {
      city: 'Port Harcourt',
      address: '#38-44 Uyo Street, Off Stadium Road, Rumuomasi, Rivers State',
    },
    { city: 'Owerri', address: 'Ellen Johnson Sirleaf Road, Amakohia Owerri' },
    { city: 'Aba', address: '#43 Azikiwe Road by St. Joseph Catholic Church, Aba' },
    { city: 'Onitsha', address: '#1 Otigba Crescent, off Niger Drive, Onitsha' },
  ];

  goToApp() {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.open(
        'https://play.google.com/store/apps/details?id=com.drsavealife.myhomeclinic&pcampaignid=web_share',
        '_blank',
      );
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.open(
        'https://apps.apple.com/ng/app/my-home-clinic/id1663638197?platform=iphone',
        '_blank',
      );
    } else {
      window.open(
        'https://play.google.com/store/apps/details?id=com.drsavealife.myhomeclinic&pcampaignid=web_share',
        '_blank',
      );
    }
  }
}
