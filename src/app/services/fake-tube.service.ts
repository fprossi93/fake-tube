import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VideoListModel } from '../models/video-list.model';
import { ApiServicesService } from './api-services.service';

@Injectable({
  providedIn: 'root'
})
export class FakeTubeService {

  constructor(private readonly apiService: ApiServicesService) { }

  getVideos(){
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

  private fetchVideos(queryParams: any){
    return this.apiService.getService(`videos?${queryParams}`).pipe(map((res: any) => new VideoListModel(res)))
  }
}
