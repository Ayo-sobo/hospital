import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page';
import { AboutPageComponent } from './pages/about-page/about-page';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page';
import { Branches } from './components/branches/branches';
import { Tour } from './pages/tour/tour';
import { Contact } from './pages/contact/contact';
// import { AppointmentPageComponent } from './pages/appointment-page/appointment-page.component';
// import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'tour', component: Tour },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
