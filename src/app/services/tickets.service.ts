import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



// interfaces
import { Billboard, Response } from '../interfaces/billboard.interface';
import { Event } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  id: string = "0";

  endpointList: string = "assets/data/events.json";


  constructor(private httpClient: HttpClient) { }


  // Get all events
  getEvents(): Observable<Response[]> {
    return this.httpClient.get<Response[]>(this.endpointList);
  }
}
