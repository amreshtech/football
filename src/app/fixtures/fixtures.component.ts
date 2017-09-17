import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { DataService } from 'app/data.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/take';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})

export class FixturesComponent implements OnInit, OnChanges {
  @Input() fixtureUrl: string;
  fixtureList: Array<string>;
  errorMessageHead: string;
  errorMessageSub: string;
  
  constructor(private dataService: DataService) {
    this.fixtureList = [];
    this.errorMessageHead = 'Oops!! Seems that we are experiencing some technical problem.'
    this.errorMessageSub = 'Please try again later.'
  }


  ngOnInit() {
  }

  setCountdown( eventDate ) {
    eventDate = new Date(eventDate);
    let timeDifference: number;
    return Observable.interval(1000).map((x) => {
      timeDifference = (new Date(eventDate).getTime() - new Date().getTime()) / 1000;
      return this.dataService.setDiff(timeDifference);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.fixtureUrl.currentValue) {
      this.dataService.getFixtureDetails(changes.fixtureUrl.currentValue + '?timeFrame=n80')
        .subscribe(res => {
          this.fixtureList = JSON.parse(res._body).fixtures.slice(0, 5);
          this.fixtureList.forEach((fixture: any) => {
            fixture.countdown = this.setCountdown(fixture.date);
          });
        });
    }
  }
}
