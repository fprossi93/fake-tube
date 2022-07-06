import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoListModel } from 'src/app/models/video-list.model';
import { VideoModel } from 'src/app/models/video.model';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
  providers:[QueueService]
})
export class VideoItemComponent implements OnInit {
  @Input()
  itemValue: string = '';
  @Input()
  video!: VideoModel;

  constructor(private queueService: QueueService, private route: Router) { }

  ngOnInit(): void {
  }

  watchLater(item: string){
    this.queueService.pusIntoQueue(item)
  }

  goToVideoDetail(){
    this.route.navigate(['private', 'watch', this.video.videoId]);
  }
}
