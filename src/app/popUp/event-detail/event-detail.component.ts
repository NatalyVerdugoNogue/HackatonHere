import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})

export class EventDetailComponent implements OnInit {

  constructor(private eventService: EventService) { }
  eventosArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

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
  onDelete($key) {
    if (confirm('Confirmar para eliminar evento')) {
      this.eventService.deleteEvent($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  filterCondition(evento) {
    return evento.nombreEvento.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

  addFavorite(key, favorite){
    favorite = true;
    this.eventService.updateData('evento/' + key, { favorite: favorite })
  }
}