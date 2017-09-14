import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
