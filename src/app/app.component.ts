import { Component } from '@angular/core';
import { EventService } from './services/event/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'miniplayer-ytd';

  constructor(public event: EventService) {

  }

}
