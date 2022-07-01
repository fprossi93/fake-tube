import { Component, OnInit } from '@angular/core';
import { VideoListModel } from 'src/app/models/video-list.model';
import { FakeTubeService } from 'src/app/services/fake-tube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly fateTubeService: FakeTubeService) { }

  ngOnInit(): void {
    this.fateTubeService.getVideos().subscribe({next: (res : VideoListModel) =>{
      console.log(res)
    }})
  }

}
