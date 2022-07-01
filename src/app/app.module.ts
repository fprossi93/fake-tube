import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsercizioComponent } from './pages/private/esercizio/esercizio.component';
import { FiglioComponent } from './pages/private/esercizio/figlio/figlio.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/private/home/home.component';
import { VideoListComponent } from './pages/private/home/video-list/video-list.component';
import { VideoItemComponent } from './pages/private/home/video-item/video-item.component';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EsercizioComponent,
    FiglioComponent,
    HomeComponent,
    VideoListComponent,
    VideoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
