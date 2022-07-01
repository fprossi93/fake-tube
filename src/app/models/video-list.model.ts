import { VideoModel } from "./video.model";

export interface IVideolistFromWs{
  etag: string;
  items: any[];
  kind: string;
  nextPageToken: string;
  pageInfo: {totalResults: number, resultsPerPage: number}
}

export class VideoListModel {
  videoList : any[] = [];

  constructor(configObj: IVideolistFromWs){
    this.videoList = this.typeVideo(configObj.items);
  }

  private typeVideo(items: any[]){
    return items.map(item => new VideoModel(item));
  }
}
