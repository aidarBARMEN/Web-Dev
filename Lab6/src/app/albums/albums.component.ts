import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumsService } from "../albums.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
constructor(private albumService: AlbumsService) {
}
  albums$!: Observable<{ id: number, title: string }[]>;
  ngOnInit(): void {
    this.albums$ =  this.albumService.getAlbums();
  }
  delete(album: {id: number, title: string}): void {
    this.albums$ = this.albums$.pipe(
      map(albums => albums.filter(a => a.id !== album.id))
    );
  }
}
