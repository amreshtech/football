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
  constructor(private dataService: DataService) {
   }

   ngOnChanges(changes: SimpleChanges): void {
    if (changes.standingsUrl.currentValue) {
      this.dataService.getStandings(changes.standingsUrl.currentValue)
      .subscribe(res => this.standingsArray = JSON.parse(res._body).standing, err => console.log('Cannot fetch standings'));
    }
  }

  ngOnInit() {
    $('.ui.accordion').accordion();
  }

}
