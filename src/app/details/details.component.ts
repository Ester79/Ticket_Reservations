import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { right } from '@popperjs/core';
import { AppRoutingModule } from '../app-routing.module';

// interfaces
import { Billboard } from '../interfaces/billboard.interface';
import { Event, Calendar } from '../interfaces/event.interface';
import { Purchase } from '../interfaces/purchase.interface';

// Service
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailEvent: any;
  errorMessage: string = "";


  constructor(private router: Router,
    private routingModule: AppRoutingModule,
    private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.loadDetail();
  }


  loadDetail(): void {
    this.ticketsService.getEventInfo()
      .subscribe({
        next: dataEvent => {
          this.detailEvent = dataEvent;
          this.detailEvent.sessions.sort((a: Calendar, b: Calendar) =>
          parseInt(a.date) - parseInt(b.date));
          this.errorMessage = "";
        },
        error: error => { this.errorMessage = "EVENT INFO NOT FOUND for " + this.ticketsService.eventSelected.title }
      });
  }

  removeLocation(singleDetail: Calendar) {
    this.ticketsService.removeFromCart(this.detailEvent, singleDetail, 1);
  }

  addLocation(detail: Calendar) {
    this.ticketsService.addToCart(this.detailEvent, detail, 1);
    this.ticketsService.getCartByArtist();
  }

  getSelected(detail: Calendar) {
    return this.ticketsService.getSelected(this.detailEvent.event.id, detail.date);
  }

}
