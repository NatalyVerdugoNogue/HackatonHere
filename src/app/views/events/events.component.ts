import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent  implements OnInit {

  constructor(public eventService: EventService) { }
  submitted: boolean;
  showSuccessMessage : boolean;
  formControls = this.eventService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.eventService.form.valid) {
      if (this.eventService.form.get('$key').value == null)
        this.eventService.insertEvent(this.eventService.form.value);
        else
          this.eventService.updateEvent(this.eventService.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000); // para que desaparezca el mensaje de exito en 3 seg
      this.submitted = false;
      this.eventService.form.setValue({
        $key: null,
        nombreEvento: '',
        lugar: '',
        fecha: '',
        horario: '',
        descripcion: '',
        asistire: false,
        favorite: false,
      });
    }
  }
}
