import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  competitionUrl: string;
  standingsUrl: string;
  headers: Headers;
  options: RequestOptions;
  daysDifference: number;
  hoursDifference: number;
  minutesDifference: number;
  secondsDifference: number;
  timeDifference: number;

  constructor(private http: Http) {
    this.competitionUrl = `http://api.football-data.org/v1/competitions/?season=2017`;

    this.headers = new Headers({ 'X-Auth-Token': '237c2c0173c141dbb73d0b75d7406dae' });
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

  getTeamDetails(teamUrl): Observable<any> {
    if (teamUrl) {
      return this.http.get(teamUrl, this.options);
    }
  }

  getPlayerDetails(playerUrl): Observable<any> {
    if (playerUrl) {
      return this.http.get(playerUrl, this.options);
    }
  }

  getFixtureDetails(fixtureUrl): Observable<any> {
    if (fixtureUrl) {
      return this.http.get(fixtureUrl, this.options);
    }
  }


  setDiff(timeDifference) {
    this.daysDifference = Math.floor(timeDifference / (3600 * 24));
    timeDifference -= this.daysDifference * (3600 * 24);
    this.hoursDifference = Math.floor(timeDifference / 3600) % 24;
    timeDifference -= this.hoursDifference * 3600;
    this.minutesDifference =  Math.floor(timeDifference / 60) % 60;
    timeDifference -= this.minutesDifference * 60;
    this.secondsDifference = Math.floor(timeDifference % 60);
    return [
      this.daysDifference + 'd',
      this.hoursDifference + 'h',
      this.minutesDifference + 'm',
      this.secondsDifference + 's'
     ].join(' ');
  }
}
