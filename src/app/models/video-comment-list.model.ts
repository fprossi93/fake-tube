import { VideoComment } from './video-comment.model';

export class VideoCommentList {
  videoCommentList: VideoComment[] = [];

  constructor(configObj: any) {
    this.videoCommentList = this.decodeVideoCommentList(configObj);
  }

  decodeVideoCommentList(configObj: any): any[] {
    return configObj.map(
      (comment: any) =>
        new VideoComment({
          authorDisplayName: comment.snippet.topLevelComment.snippet.authorDisplayName,
          publishedAt: comment.snippet.topLevelComment.snippet.publishedAt,
          likes: comment.snippet.topLevelComment.snippet.likeCount,
          textDisplay: comment.snippet.topLevelComment.snippet.textDisplay,
          authorProfileImageUrl: comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
        })
    );
  }
}
