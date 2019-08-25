import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ImageService {
  private query: string;
  private API_KEY: string = environment.FLICKR_API_KEY;
  // private API_SECRET: string = environment.FLICKR_API_SECRET;
  private API_URL: string = environment.FLICKR_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&text=';
  private perPage: string = '&per_page=12';

  constructor (private _http: HttpClient) { }

    getImage(query) {
      return this._http
        .get(this.URL + query + this.perPage)
        .pipe(map(res => res));
    }
}
