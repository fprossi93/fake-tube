import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[] = [];
  show: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
