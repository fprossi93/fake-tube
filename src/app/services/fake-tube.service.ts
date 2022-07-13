import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VideoCommentList } from '../models/video-comment-list.model';
import { VideoList } from '../models/video-list.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FakeTubeService {
  constructor(private readonly apiService: ApiService) {}

  getVideos() {
    const queryParams: string = [
      `chart=mostPopular`,
      `regionCode=IT`,
      `part=snippet,contentDetails,statistics`,
      `maxResults=12`,
      `type=video`,
      `key=${environment.API_KEY}`,
    ].join('&');
    return this.fetchVideos(queryParams);
  }

  getVideo(videoId: string) {
    const queryParams: string = [`id=${videoId}`, `part=snippet,contentDetails,statistics`, `maxResults=1`, `key=${environment.API_KEY}`].join('&');

    return this.fetchVideos(queryParams);
  }

  getComments(videoId: string) {
    const queryParams: string = [`videoId=${videoId}`, `part=id,replies,snippet`, `maxResults=10`, `key=${environment.API_KEY}`].join('&');

    return this.apiService.get(`commentThreads?${queryParams}`).pipe(map((comments: any) => new VideoCommentList(comments.items)));
  }

  getRelatedVideos(videoId: string) {
    const queryParams: string = [`part=snippet`, `type=video`, `relatedToVideoId=${videoId}`, `maxResults=20`, `key=${environment.API_KEY}`].join(
      '&'
    );

    return this.apiService.get(`search?${queryParams}`).pipe(map((videoList: any) => new VideoList(videoList)));
  }

  private fetchVideos(queryParams: string) {
    return this.apiService.get(`videos?${queryParams}`).pipe(map((videoList: any) => new VideoList(videoList)));
  }

  private fetchVideosPromise(queryParams: string) {
    return lastValueFrom(this.apiService.get(`videos?${queryParams}`).pipe(map((videoList: any) => new VideoList(videoList))));
  }
}
