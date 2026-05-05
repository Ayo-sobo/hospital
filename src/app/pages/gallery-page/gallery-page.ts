import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { videos } from './success_stories';

interface VideoItem {
  heading: string;
  videos: { video_url: string };
  sanitizedUrl?: SafeResourceUrl;
  autoplaySanitizedUrl?: SafeResourceUrl;
  thumbnailUrl?: string;
  isLoaded?: boolean;
}

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.scss',
})
export class GalleryPageComponent implements OnInit {
  videoItems: VideoItem[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.initVideos();
  }

  private initVideos(): void {
    this.videoItems = videos.map((item: VideoItem) => {
      const videoId = this.extractYouTubeId(item.videos.video_url);
      if (videoId) {
        return {
          ...item,
          sanitizedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
            this.buildEmbedUrl(videoId, false),
          ),
          autoplaySanitizedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
            this.buildEmbedUrl(videoId, true),
          ),
          thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          isLoaded: false,
        };
      }
      return {
        ...item,
        sanitizedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(item.videos.video_url),
        autoplaySanitizedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(item.videos.video_url),
        isLoaded: false,
      };
    });
  }

  private extractYouTubeId(url: string): string | null {
    const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
    return match && match[2].length === 11 ? match[2] : null;
  }

  private buildEmbedUrl(videoId: string, autoplay: boolean): string {
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
      enablejsapi: '1',
      origin: window.location.origin,
    });
    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  }

  loadVideo(index: number): void {
    this.videoItems[index].isLoaded = true;
  }

  trackByVideo(index: number, item: VideoItem): string {
    return item.videos.video_url;
  }

  onThumbnailError(event: Event, item: VideoItem): void {
    const img = event.target as HTMLImageElement;
    const videoId = this.extractYouTubeId(item.videos.video_url);
    if (!videoId) return;
    const fallbacks = [
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/default.jpg`,
    ];
    const next = fallbacks.find((f) => !img.src.includes(f));
    if (next) img.src = next;
  }
}
