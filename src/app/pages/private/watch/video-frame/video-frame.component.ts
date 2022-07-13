import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-video-frame',
  templateUrl: './video-frame.component.html',
  styleUrls: ['./video-frame.component.scss'],
})
export class VideoFrameComponent implements OnInit, OnChanges {
  @Input() currentVideo!: Video;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('current video-frame oc', this.currentVideo);
  }

  ngOnInit(): void {
    console.log('current video-frame', this.currentVideo);
  }
}
