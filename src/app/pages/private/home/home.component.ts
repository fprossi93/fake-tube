import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { VideoList } from 'src/app/models/video-list.model';
import { Video } from 'src/app/models/video.model';
import { FakeTubeService } from 'src/app/services/fake-tube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    OnDestroy
{
  videoList: Video[] = []; // | null = null;

  constructor(private readonly fakeTubeService: FakeTubeService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInitChanges');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  ngOnInit(): void {
    this.fakeTubeService.getVideos().subscribe({
      next: (res) => {
        this.videoList = res.videoList;
      },
    });
    //   console.log('prima di getVideos');
    //   const response = await this.fakeTubeService.getVideos();
    //   console.log(response);
  }
}
