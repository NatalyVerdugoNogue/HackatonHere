import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  eventosArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit() {
    this.customerService.getListOfEvents().subscribe(list => {
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
      this.customerService.deleteEvent($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  filterCondition(evento) {
    return evento.nombreEvento.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}