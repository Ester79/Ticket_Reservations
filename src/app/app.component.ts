import { Component } from '@angular/core';
import { TicketsService } from './services/tickets.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private ticketService: TicketsService){}
}
