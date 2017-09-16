import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'app/data.service';
declare var $: any;

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit, OnChanges {
  @Input() teamUrl: string;
  playerUrl: string;
  fixtureUrl: string;
  errorMessageHead: string;
  errorMessageSub: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    $('.menu .item').tab();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.teamUrl.currentValue) {
      this.dataService.getTeamDetails(changes.teamUrl.currentValue)
        .subscribe(res => {
          this.playerUrl = JSON.parse(res._body)._links.players.href;
          this.fixtureUrl = JSON.parse(res._body)._links.fixtures.href;
        });
    }
  }
}
