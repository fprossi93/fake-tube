import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EserciziComponent } from './pages/private/esercizi/esercizi.component';
import { FiglioComponent } from './pages/private/esercizi/figlio/figlio.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/private/home/home.component';
import { VideoItemComponent } from './pages/private/home/video-item/video-item.component';
import { VideoListComponent } from './pages/private/home/video-list/video-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EserciziComponent,
    FiglioComponent,
    HomeComponent,
    VideoItemComponent,
    VideoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
