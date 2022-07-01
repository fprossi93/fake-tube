export interface IVideoBase{
  description: string;
  title: string;
  videoId: string;
}

export class VideoModel implements IVideoBase{
  description: string = '';
  title: string = '';
  videoId: string = '';
  channelTitle: string = '';
  publishedAt: Date = new Date();
  imagePreview: string = '';
  likes: string = '';
  url : string = '';

  constructor(configObj: any){
    this.videoId = configObj.id;
    this.description = configObj.snippet.description;
    this.title = configObj.snippet.title;
    this.channelTitle = configObj.snippet.channelTitle;
    this.publishedAt =configObj.snippet.publishedAt;
    this.imagePreview = configObj.snippet.thumbnails.high.url;
    this.likes = configObj.statistics.likeCount;
    this.url = `http://www.youtube.com/embed/${configObj.id}`;
  }

}
