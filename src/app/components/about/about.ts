import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface HighlightImage {
  src: string;
  alt: string;
}

interface Highlight {
  tag: string;
  title: string;
  excerpt: string;
  body: string;
  images: HighlightImage[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  activeDialog: Highlight | null = null;

  highlights: Highlight[] = [
    {
      tag: 'Orthopedic Innovation',
      title: 'First in West Africa to Deploy Robotic Knee Replacement Surgery',
      excerpt:
        'Using our Robotic System — Vision Cart and Robotic Arm — we brought precision robotic orthopedic surgery to West Africa.',
      body: 'SaveALife became the first hospital in West Africa to deploy robotic knee replacement surgery using our cutting-edge Robotic System. The system comprises a Vision Cart for real-time imaging and planning, and a Robotic Arm that executes bone cuts with sub-millimetre precision. This milestone has made SaveALife a destination for patients across Africa and beyond, eliminating the need to travel to Europe or America for world-class orthopedic care. Our surgeons underwent advanced training, and we have since performed numerous successful robotic-assisted knee replacements with outstanding patient outcomes.',
      images: [
        {
          src: 'assets/robotic.png',
          alt: 'Robotic System — Vision Cart and Robotic Arm',
        },
      ],
    },
    {
      tag: 'Cardiac & Neuro Care',
      title: 'First in Nigeria to Deploy Full Digital Cathlab',
      excerpt:
        "We launched Nigeria's first fully digital Catheterisation Laboratory for cardiac and neurological interventions.",
      body: "In 2019, SaveALife Mission Hospital deployed Nigeria's first Full Digital Cathlab — a state-of-the-art catheterisation laboratory capable of performing advanced cardiac and neurological interventional procedures. The facility features high-resolution digital fluoroscopy, a full cardiac imaging suite, and a dedicated neurointervention suite. Prior to this, Nigerians requiring these procedures had no option but to travel abroad at enormous cost. Today, patients from across Nigeria and West Africa come to Port Harcourt to receive interventional cardiology and neurology care of the highest international standard within reach.",
      images: [
        {
          src: 'assets/cathlab.png',
          alt: 'Full Digital Cathlab facility',
        },
      ],
    },
    {
      tag: 'Renal Medicine',
      title: 'First in South-South & South-East to Perform Kidney Transplants',
      excerpt:
        'We carried out the first excellently successful kidney transplants in the South-South and South-East regions of Nigeria.',
      body: 'SaveALife Mission Hospital became the first hospital in the South-South and South-East regions of Nigeria to carry out excellently successful kidney transplants. Our dedicated renal unit — equipped with modern dialysis machines and a fully staffed nephrology and transplant surgery team — offers comprehensive renal care. Patients who previously had to travel to Lagos or Abuja, or worse, leave the country, can now receive life-saving kidney transplants close to home. This landmark achievement reflects our commitment to bringing specialist tertiary healthcare to underserved regions of Nigeria.',
      images: [
        {
          src: 'assets/7.png',
          alt: 'Kidney transplant unit with dialysis machines',
        },
        {
          src: 'assets/8.jpg',
          alt: 'Dialysis session in progress at SaveALife Mission Hospital',
        },
      ],
    },
    {
      tag: 'Fertility Breakthrough',
      title: 'Record: Successful IVF on a 62-Year-Old — Delivery of Triplets',
      excerpt:
        'We hold the record for a successful IVF procedure on a 62-year-old woman, resulting in the delivery of triplets — 2 boys and 1 girl.',
      body: 'In a landmark medical achievement, SaveALife Mission Hospital successfully performed an IVF procedure on a 62-year-old woman, resulting in a full-term delivery of triplets — two boys and one girl. This record-setting case placed SaveALife on the global map for reproductive medicine and demonstrated the extraordinary capability of our fertility team. Our IVF centre is equipped with advanced embryology laboratories and staffed by highly experienced reproductive endocrinologists. The success of this case reflects our commitment to offering hope to patients who may have been turned away elsewhere.',
      images: [
        {
          src: 'assets/9.jpg',
          alt: 'Mother with triplet newborns after successful IVF',
        },
        {
          src: 'assets/10.jpg',
          alt: 'Babies through IVF at SaveALife Mission Hospital',
        },
      ],
    },
  ];

  openDialog(highlight: Highlight): void {
    this.activeDialog = highlight;
    document.body.style.overflow = 'hidden';
  }

  closeDialog(): void {
    this.activeDialog = null;
    document.body.style.overflow = '';
  }
}
