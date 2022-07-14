import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

// interfaces
import { Billboard } from '../interfaces/billboard.interface';
import { Event } from '../interfaces/event.interface';

// Service
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router,
    private routingModule: AppRoutingModule,
    private ticketsService: TicketsService) { }

  ngOnInit(): void {
  }

}
