import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoCommentList } from 'src/app/models/video-comment-list.model';
import { VideoComment } from 'src/app/models/video-comment.model';
import { Video } from 'src/app/models/video.model';
import { FakeTubeService } from 'src/app/services/fake-tube.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
})
export class WatchComponent implements OnInit {
  currentVideo: Video | null = null;
  currentComments: VideoComment[] | null = null;
  currentRelatedVideos: Video[] = [];

  constructor(private readonly activeRoute: ActivatedRoute, private readonly fakeTubeService: FakeTubeService) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe({
      next: (params: any) => {
        console.log(params);
        const videoId = params.videoId;
        this.getVideo(videoId);
        this.getComments(videoId);
        this.getRelatedVideos(videoId);
      },
    });
    // this.activeRoute.queryParams.subscribe({
    //   next: (queryParams) => {
    //     console.log('questi sono i queryParams:', queryParams);
    //   },
    // });
    // console.log('snapshot', this.activeRoute.snapshot.paramMap.get('videoId'));
    // const videoId = this.activeRoute.snapshot.paramMap.get('videoId') ?? '';
    // this.getVideo(videoId);
    // this.getComments(videoId);
    // this.getRelatedVideos(videoId);
  }

  getVideo(videoId: string) {
    this.fakeTubeService.getVideo(videoId).subscribe({
      next: (res) => {
        console.log(res);
        this.currentVideo = res.videoList[0];
      },
    });
  }

  getComments(videoId: string) {
    this.fakeTubeService.getComments(videoId).subscribe({
      next: (res) => {
        this.currentComments = res.videoCommentList;
      },
    });
  }

  getRelatedVideos(videoId: string) {
    this.fakeTubeService.getRelatedVideos(videoId).subscribe({
      next: (res) => {
        this.currentRelatedVideos = res.videoList;
      },
    });
  }
}
