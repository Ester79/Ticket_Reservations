import { Event } from "./event.interface"
import { Calendar } from "./event.interface";



export interface Purchase {
  event: Event;
  session: Calendar;
  quantity: number;
}
