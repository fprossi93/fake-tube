import { Component, OnInit } from '@angular/core';
import { VideoListModel } from 'src/app/models/video-list.model';
import { VideoModel } from 'src/app/models/video.model';
import { FakeTubeService } from 'src/app/services/fake-tube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videoList: VideoModel[] = [];
  constructor(private readonly fateTubeService: FakeTubeService) { }

  ngOnInit(): void {
    this.fateTubeService.getVideos().subscribe({next: (res : VideoListModel) =>{
      this.videoList = res.videoList;
      console.log(res)
    }})
  }

}
