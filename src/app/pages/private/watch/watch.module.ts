import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchRoutingModule } from './watch-routing.module';
import { WatchComponent } from './watch.component';
import { VideoFrameComponent } from './video-frame/video-frame.component';
import { RelatedComponent } from './related/related.component';
import { CommentsComponent } from './comments/comments.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WatchComponent, VideoFrameComponent, RelatedComponent, CommentsComponent],
  imports: [CommonModule, WatchRoutingModule, SharedModule],
})
export class WatchModule {}
