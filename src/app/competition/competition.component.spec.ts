import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionComponent } from './competition.component';

describe('CompetitionComponent', () => {
  let component: CompetitionComponent;
  let fixture: ComponentFixture<CompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
