import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'app/data.service';
declare var $: any;

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit, OnChanges {
  @Input() standingsUrl: string;
  standingsArray: Array<any>;
  teamUrl: string;
  errorMessageHead: string;
  errorMessageSub: string;

  constructor(private dataService: DataService) {
    this.standingsArray = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.standingsUrl.currentValue) {
      this.dataService.getStandings(changes.standingsUrl.currentValue)
        .subscribe(res => this.standingsArray = JSON.parse(res._body).standing, err => {
          this.errorMessageHead = 'Oops!! Seems that we are experiencing some technical problem.'
          this.errorMessageSub = 'Please try again later.'
        });
    }
  }

  ngOnInit() {
    $('.ui.accordion').accordion();
  }

  setTeamUrl(url) {
    this.teamUrl = url;
  }
}
