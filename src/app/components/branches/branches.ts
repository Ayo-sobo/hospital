import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { hospital_location } from './hospitallocation.data';

@Component({
  selector: 'app-branches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branches.html',
  styleUrl: './branches.scss',
})
export class Branches implements OnInit {
  hospital_data: any[] = [];
  selectedHospital: any = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.hospital_data = hospital_location;
  }

  openMap(hosp: any) {
    this.selectedHospital = hosp;
  }

  closeMap(event: Event) {
    event.stopPropagation();
    this.selectedHospital = null;
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
