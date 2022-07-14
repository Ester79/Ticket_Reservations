import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



// interfaces
import { Billboard, Response } from '../interfaces/billboard.interface';
import { Event, Calendar } from '../interfaces/event.interface';
import { Purchase } from '../interfaces/purchase.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  id: string = "";
  endpointList: string = "assets/data/events.json";
  endpointDetail: string = "assets/data/event-info-"
  jsonExtension: string = ".json";

  _eventSelected: any = null // full object event selected
  _locationsSelected: any = null;

  _purchase: Purchase[] = [];



  constructor(private httpClient: HttpClient) { }

  // Get object event selected
  get eventSelected() {
    return this._eventSelected;
  }
  // Set object event selected
  set eventSelected(value: Billboard) {
    this._eventSelected = value;
  }


  // Get locations selected
  get locationsSelected() {
    return this._locationsSelected;
  }
  // Set locations selected
  set locationsSelected(value: Event) {
    this._locationsSelected = value;
  }




  // Get all events
  getEvents(): Observable<Response[]> {
    return this.httpClient.get<Response[]>(this.endpointList);
  }


  // Get detail event
  getEventInfo(): Observable<Event> {
    return this.httpClient.get<Event>(`${this.endpointDetail}${this._eventSelected?.id}${this.jsonExtension}`);
  }

  addToCart(event: Event, session: Calendar , quantity: number) {
    for (let i=0;i<this._purchase.length; i++) {
      if (this._purchase[i].event.event.id == event.event.id && this._purchase[i].session.date == session.date) {
        if(this._purchase[i].quantity + 1 <= new Number(session.availability)) {
          this._purchase[i].quantity++;
        }
        return;
      }
    }
    this._purchase.push({event: event, session: session, quantity: 1});
  }

  removeFromCart(event: Event, session: Calendar, quantity: number){
    let indexToRemove = -1;
    for(let i= 0; i < this._purchase.length; i++){
      if(this._purchase[i].event.event.id == event.event.id && this._purchase[i].session.date == session.date){
        if(this._purchase[i].quantity > 1){
          this._purchase[i].quantity--;
        }else{
          indexToRemove = i;
        }
        break;
      }
    }

    if (indexToRemove >= 0) {
      this._purchase.splice(indexToRemove, 1);
    }

  }

  getCartByArtist() {
    let map = new Map();
    for (let i=0; i< this._purchase.length; i++) {
      let key = this._purchase[i].event.event.title;
      if (map.has(key)) {
        map.get(key).push(this._purchase[i]);
      } else {
        map.set(key, [this._purchase[i]]);
      }
    }
    console.log(map);
    return map;
  }

  getSelected(id: string, session: string) {
    for (let i=0;i<this._purchase.length; i++) {
      if (this._purchase[i].event.event.id == id && this._purchase[i].session.date == session) {
        return this._purchase[i].quantity;
      }
    }
    return 0;
  }
}
