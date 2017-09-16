import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnChanges {

  @Input() playerUrl: string;
  playerList: Array<string>;
  errorMessageHead: string;
  errorMessageSub: string;

  constructor(private dataService: DataService) {
    this.playerList = [];
   }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.playerUrl.currentValue) {
      this.dataService.getPlayerDetails(changes.playerUrl.currentValue)
        .subscribe(res => this.playerList = JSON.parse(res._body).players, err => {
          this.errorMessageHead = 'Oops!! Seems that we are experiencing some technical problem.'
          this.errorMessageSub = 'Please try again later.'
        });
    }
  }

}
