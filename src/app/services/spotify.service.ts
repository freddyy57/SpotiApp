import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  arttistas:any[] = [];
  artista:any[] =[];
  token:string = 'BQDVAeLvEk1YHnT5s2u3ZmLqbRiX2XfKz0FYYHwtbLhhSL-0iLOyWgMCEbRAsBCQaoX33TTIjizypecRX44';

  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists/";

  constructor(private _http:HttpClient) {
  //  this.getToken();
  }

  // getToken() {
  //   let url = "https://accounts.spotify.com/api/token";
  //   let headers = new HttpHeaders({
  //     'client_id': '',
  //     'client_secret': '',
  //     'grant_type': 'client_credentials'
  //   });
  //   return this._http.post(url, { headers: headers})
  //             .subscribe(res => {
  //               console.log(res);
  //             })
  // }

  private get_headers(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': ' Bearer ' + this.token
    });
    return headers;
  }

   getArtistas(termino:string) {

     let headers = this.get_headers();


     let query = `?q=${termino}&type=artist`;
     let url = this.urlBusqueda + query;

     return this._http.get( url, { headers: headers } )
                .map( (res:any) => {
                  this.arttistas = res.artists.items;
                  return this.arttistas;
                })
   }


   getArtista(id:string) {

     let headers = this.get_headers();

     let query = `${id}`;
     let url = this.urlArtista + query;

     return this._http.get( url , { headers: headers });
   }

   getTop(id:string) {

     let headers = this.get_headers();

     let query = `${id}/top-tracks?country=US`;
     let url = this.urlArtista + query;

     return this._http.get( url , { headers: headers });
   }

}
