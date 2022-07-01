import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private queueService: QueueService) { }

  ngOnInit(): void {
  }

  watchLater(item: string){
    this.queueService.pusIntoQueue(item)
  }
}
