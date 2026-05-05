import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPageComponent {
  achievements = [
    { label: "Africa's First Fully Digitalized Hospital" },
    { label: 'First Digital Cathlab in Nigeria' },
    { label: 'First Robotic Knee Surgery in West Africa' },
    { label: 'First Kidney Transplant in South-South Nigeria' },
    { label: 'Record IVF on 62-Year-Old with Triplet Delivery' },
    { label: 'ISO 9001 Certified Multi-Specialty Hospital' },
  ];

  services = [
    'Interventional Cardiology & Cathlab',
    'Kidney Transplant & Nephrology',
    'Robotic Knee & Hip Replacement',
    'IVF, ICSI & Fertility Treatment',
    'Laser Surgeries (Prostate, BPH, Hemorrhoids)',
    'Obstetrics & Gynaecology',
    'Paediatric & Neonatal Care',
    'Laparoscopic & Endoscopic Procedures',
    '24/7 Emergency & Trauma',
    'Comprehensive Health Checks',
    'Telemedicine (MyHomeClinic App)',
    'Blood Bank & Dialysis Services',
  ];
}
