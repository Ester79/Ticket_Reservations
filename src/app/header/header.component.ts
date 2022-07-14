import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

// interfaces
import { Billboard } from '../interfaces/billboard.interface';
import { Event } from '../interfaces/event.interface';

// Service
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private routingModule: AppRoutingModule,
    private ticketsService: TicketsService) { }

  ngOnInit(): void {
  }

}
