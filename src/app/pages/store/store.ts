import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './store.html',
  styleUrl: './store.scss',
})
export class Store implements OnInit, OnDestroy {
  isLoading = true;
  hasError = false;
  storeUrl = 'https://icare.drsavealife.com';

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  onIframeLoad(): void {
    this.isLoading = false;
  }

  onIframeError(): void {
    this.isLoading = false;
    this.hasError = true;
  }

  openExternal(): void {
    window.open(this.storeUrl, '_blank');
  }
}
