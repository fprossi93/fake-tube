import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video.model';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
  // providers: [QueueService],
})
export class VideoItemComponent implements OnInit {
  @Input() itemValue: string = '';
  @Input() video!: Video;

  constructor(private readonly queueService: QueueService, private readonly route: Router) {}

  ngOnInit(): void {}

  watchLater(item: string) {
    this.queueService.pushIntoQueue(item);
  }

  goToVideoDetail() {
    this.route.navigate(['private', 'watch', this.video.videoId], {
      // queryParams: { idQueryParams: this.video.videoId, altroQueryParam: this.video.likes },
      queryParams: { idQueryParams: this.video.videoId },
    });
  }
}
