import {Component} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  logItems: string[] = [];

  displayDetails() {
    this.count++;
    this.logItems.push('Button pressed at time ' + moment(new Date()).format('DD.MM.YYYY h:MM:ss'));
  }

  showButton(): boolean {
    return this.count % 2 !== 0;
  }

  public getColor(i) {
    return i > 4 ? 'blue' : 'green';
  }
}
