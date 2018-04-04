import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  pistas:any[];

  constructor(private _activatedRoute:ActivatedRoute,
              private _spotifyService:SpotifyService) { }

  ngOnInit() {
    this._activatedRoute.params
    .map(parametros => parametros['id'])
    .subscribe(  id => {
      //console.log(id);

      this._spotifyService.getArtista(id)
      .subscribe( artista => {
        this.artista = artista;
        // console.log(artista);
      } );

      this._spotifyService.getTop(id)
      .map( ( pistas:any ) => pistas.tracks )
      .subscribe( pistas => {
        // console.log(pistas);
        this.pistas = pistas;
      } );

    })
  }

}
