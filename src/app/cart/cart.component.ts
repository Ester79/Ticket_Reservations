import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

// interfaces
import { Billboard } from '../interfaces/billboard.interface';
import { Event } from '../interfaces/event.interface';
import { Purchase} from '../interfaces/purchase.interface';

// Service
import { TicketsService } from '../services/tickets.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private router: Router,
    private routingModule: AppRoutingModule,
    private ticketsService: TicketsService) { }

  ngOnInit(): void {

  }


  getCart(){
    return this.ticketsService.getCartByArtist();
  }

  delete(purchase: Purchase){
    this.ticketsService.removeFromCart(purchase.event, purchase.session, 1);
  }

}
