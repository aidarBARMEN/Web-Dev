import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: "full"},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'albums', component: AlbumsComponent},
      {path: 'albums/:id', component: AlbumDetailComponent},
      {path: 'albums/:id/photos', component: AlbumPhotosComponent},
    ]),
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent,
    TopBarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
