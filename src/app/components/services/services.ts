import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesComponent {
  services = [
    {
      icon: 'heart',
      title: 'Interventional Cardiology',
      desc: "Nigeria's first digital Cathlab for cardiac and neurological interventions. Angiogram, Angioplasty, Stenting & Pacing available 24/7.",
      tag: 'First in Nigeria',
    },
    {
      icon: 'robot',
      title: 'Robotic Knee Replacement',
      desc: 'First in West Africa to deploy robotic knee replacement surgery using the MISSO Robotic System for precise, minimal-invasive outcomes.',
      tag: 'First in West Africa',
    },
    {
      icon: 'kidney',
      title: 'Kidney Transplant',
      desc: 'First in South-South Nigeria to perform successful kidney transplants. Full Nephrology & Urology services with post-transplant follow-up.',
      tag: 'Regional Pioneer',
    },
    {
      icon: 'baby',
      title: 'IVF & Fertility',
      desc: 'Comprehensive fertility diagnosis and treatment. Record-holding IVF success on a 62-year-old with triplet delivery. ICSI, IUI, Surrogacy.',
      tag: 'Record Holder',
    },
    {
      icon: 'laser',
      title: 'Laser Surgeries',
      desc: 'Center of excellence in laser surgeries — prostate, kidney stones, hemorrhoids, fistula and more with minimal invasive technique.',
      tag: 'Center of Excellence',
    },
    {
      icon: 'emergency',
      title: '24/7 Emergency & Trauma',
      desc: 'Fully equipped emergency unit meeting international CPR and trauma standards. 400-pint blood bank with 24/7 ambulance services.',
      tag: 'Always Available',
    },
  ];
}
