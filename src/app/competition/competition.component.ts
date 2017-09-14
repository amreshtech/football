import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from 'app/data.service';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  competitionForm: FormGroup;
  competitionDrop: AbstractControl;
  competitions: Array<any>;
  standingsUrl: string;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.competitionForm = this.fb.group({
      'competitionDrop': ['', Validators.required]
    });

    this.competitionDrop = this.competitionForm.controls['competitionDrop'];
    this.competitions = [];
    this.competitionDrop.valueChanges.subscribe(res => this.standingsUrl = res);
  }

  ngOnInit() {
    this.dataService.getCompetitions().subscribe(res => {
      this.competitions = JSON.parse(res._body);
    }, err => console.log('Error Fetching Competitions.'));
  }
}
