import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  videos: string[] = ['1','2','3','4','5'];
  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
