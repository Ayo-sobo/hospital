import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Take a Tour', path: '/tour' },
    { label: 'Contact Us', path: '/contact' },
  ];

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  goToApp() {
    // const userAgent = navigator.userAgent || navigator.vendor;

    // if (/android/i.test(userAgent)) {
    //   window.open(
    //     'https://play.google.com/store/apps/details?id=com.drsavealife.myhomeclinic&pcampaignid=web_share',
    //     '_blank',
    //   );
    // } else if (/iPad|iPhone|iPod/.test(userAgent)) {
    //   window.open(
    //     'https://apps.apple.com/ng/app/my-home-clinic/id1663638197?platform=iphone',
    //     '_blank',
    //   );
    // } else {
    //   window.open(
    //     'https://play.google.com/store/apps/details?id=com.drsavealife.myhomeclinic&pcampaignid=web_share',
    //     '_blank',
    //   );
    // }

    window.open('https://drsavealife.com/authentication/landing', '_blank');
    this.closeMobileMenu();
  }
}
