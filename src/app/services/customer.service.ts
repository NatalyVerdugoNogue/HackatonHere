import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private firebase: AngularFireDatabase) { }
  eventList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    nombreEvento: new FormControl('', Validators.required ),
    lugar: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    horario: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required)
  });


  getListOfEvents() {
    this.eventList = this.firebase.list('evento');
    return this.eventList.snapshotChanges();
  }


  insertEvent(evento) {
    this.eventList.push({
      nombreEvento: evento.nombreEvento,
      lugar: evento.lugar,
      fecha: evento.fecha,
      horario: evento.horario,
      descripcion: evento.descripcion
    });
  }

  populateForm(evento) {
    this.form.setValue(evento);
  }

  updateEvent(evento) {
    this.eventList.update(evento.$key,
      {
        nombreEvento: evento.nombreEvento,
        lugar: evento.lugar,
        fecha: evento.fecha,
        horario: evento.horario,
        descripcion: evento.descripcion
      });
  }

  deleteEvent($key: string) {
    this.eventList.remove($key);
  }

}