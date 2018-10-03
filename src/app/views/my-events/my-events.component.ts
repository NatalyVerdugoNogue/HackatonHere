import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {

  constructor(private eventService: EventService) { }
  eventosArray = [];

  ngOnInit() {
    this.eventService.getListOfEvents().subscribe(list => {
      this.eventosArray = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
          // me devolvera el objeto con solo los valores
          // convertimos el objeto en array
        }
      })
    });
  }
}