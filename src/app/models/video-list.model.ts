import { Video } from './video.model';

export interface IVideoListFromWs {
  etag: string;
  items: any[];
  kind: string;
  nextPageToken: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
}

export class VideoList {
  videoList: any[] = [];

  constructor(configObj: IVideoListFromWs) {
    this.videoList = this.typeVideo(configObj.items);
  }

  private typeVideo(items: any[]) {
    return items.map((item) => new Video(item));
  }
}
