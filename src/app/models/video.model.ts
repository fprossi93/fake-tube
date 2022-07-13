interface IVideoBase {
  description: string;
  title: string;
  videoId: string;
}

export class Video implements IVideoBase {
  description: string = '';
  title: string = '';
  videoId: string = '';
  channelTitle: string = '';
  publishedAt: Date = new Date();
  imagePreview: string = '';
  likes: string = '';
  url: string = '';

  constructor(configObj: any) {
    // console.log(configObj);
    this.videoId = configObj.id;
    this.description = configObj.snippet?.description ?? 'nessuna descrizione';
    this.title = configObj.snippet?.title ?? 'nessun titolo';
    this.channelTitle = configObj.snippet?.channelTitle ?? 'nessun channel';
    this.publishedAt = configObj.snippet?.publishedAt ?? '';
    this.imagePreview = configObj.snippet?.thumbnails?.high?.url ?? '';
    this.likes = configObj.statistics?.likeCount ?? '';
    this.url = `http://www.youtube.com/embed/${configObj.id}`;
  }
}
