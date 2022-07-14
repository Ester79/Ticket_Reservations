import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

// interfaces
import { Billboard } from '../interfaces/billboard.interface';
import { Event } from '../interfaces/event.interface';

// Service
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router,
    private routingModule: AppRoutingModule,
    private ticketsService: TicketsService) { }

  ngOnInit(): void {
  }

}
