export class VideoComment {
  authorDisplayName: string = '';
  authorProfileImageUrl: string = '';
  textDisplay: string = '';
  publishedAt: Date = new Date();
  likes: number = 0;

  constructor(configObj: any) {
    this.authorDisplayName = configObj.authorDisplayName;
    this.authorProfileImageUrl = configObj.authorProfileImageUrl;
    this.textDisplay = configObj.textDisplay;
    this.publishedAt = configObj.publishedAt;
    this.likes = configObj.likes;
  }
}
