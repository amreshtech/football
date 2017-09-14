import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'Rxjs/Observable';

@Injectable()
export class DataService {
  competitionUrl: string;
  standingsUrl: string;
  headers: Headers;
  options: RequestOptions;
  constructor(private http: Http) {
    this.competitionUrl = `http://api.football-data.org/v1/competitions/?season=2017`;

    this.headers = new Headers({'X-Auth-Token': '237c2c0173c141dbb73d0b75d7406dae'});
    this.options = new RequestOptions({ headers: this.headers });
   }

  getCompetitions(): Observable<any> {
    return this.http.get(this.competitionUrl, this.options);
  }

  getStandings(standingsUrl): Observable<any> {
    if (standingsUrl) {
      return this.http.get(standingsUrl, this.options);
    }
  }
}
