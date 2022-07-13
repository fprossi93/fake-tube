import { Component, Input, OnInit } from '@angular/core';
import { VideoComment } from 'src/app/models/video-comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() currentComments: VideoComment[] = [];

  constructor() {}

  ngOnInit(): void {}
}
