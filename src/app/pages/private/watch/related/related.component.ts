import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss'],
})
export class RelatedComponent implements OnInit, OnChanges {
  @Input() currentRelatedVideos: Video[] = [];

  constructor(private readonly route: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('current related videos:', this.currentRelatedVideos);
  }

  ngOnInit(): void {}

  navigateWatch(videoId: any) {
    this.route.navigate(['private', 'watch', videoId.videoId]);
  }
}
