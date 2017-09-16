import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorMessageHead = 'Oops!! Seems that we are experiencing some technical problem.'
  erroMessageSub = 'Please try again later.'
}
