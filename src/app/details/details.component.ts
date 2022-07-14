import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

// interfaces
import { Billboard } from '../interfaces/billboard.interface';
import { Event, Calendar } from '../interfaces/event.interface';

// Service
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailEvent: Calendar[] = [];
  locations: number = 0;

  constructor(private router: Router,
    private routingModule: AppRoutingModule,
    private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.loadDetail();
  }


  loadDetail(): void {
    this.ticketsService.getEventInfo()
    .subscribe(dataEvent => {
      this.detailEvent = dataEvent.sessions;
      console.log("DETAIL EVENT");
      console.log(this.detailEvent);
    });
  }

  removeLocation(){
    console.log("Enter ot remove method");
  }

  addLocation(){
    console.log("Enter ot add method");
  }

}
