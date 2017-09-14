import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit, OnChanges {
  @Input() competitionID: number;
  constructor(private dataService: DataService) {
   }

   ngOnChanges(changes: SimpleChanges): void {
    if (changes.competitionID.currentValue) {
      this.dataService.getStandings(changes.competitionID.currentValue)
      .subscribe(res => console.log(JSON.parse(res._body)), err => console.log('Cannot fetch standings'));
    }
  }

  ngOnInit() {
  }

}
