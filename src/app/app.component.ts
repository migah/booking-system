import { Component } from '@angular/core';
import {Course} from './Course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the course planner';

  courses : Course [];

  constructor() {
    this.courses = [{
      year: 2017,
      title: "Angular2",
      education: "Computer science",
      lecturer: "Lars bilde"
    }]
  }
}
