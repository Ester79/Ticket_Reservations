import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// interfaces
import { Billboard } from '../interfaces/billboard.interface';
import { Event } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private httpClient: HttpClient) { }
}
