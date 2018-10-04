import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-check-data',
  templateUrl: './check-data.component.html',
  styleUrls: ['./check-data.component.css']
})
export class CheckDataComponent implements OnInit {

  form: FormGroup;
  uid: string;
  dataUser: any;

  orders = [
    { id: 100, name: 'Informática' },
    { id: 200, name: 'Alimentos' },
    { id: 300, name: 'Salud y Farmacéutica' },
    { id: 400, name: 'Servicios financieros' },
    { id: 500, name: 'Transporte' },
    { id: 600, name: 'Otros' },
  ];

  constructor(private formBuilder: FormBuilder, private addFirestore: ProfileService, private firebaseAuth: AuthService) {

    const controls = this.orders.map(c => new FormControl(false));

    this.form = this.formBuilder.group({
      orders: new FormArray(controls)
    });
  }

  ngOnInit() {
    this.firebaseAuth.user.subscribe(user => {
      this.uid = user.uid;
    });
  }

  submit() {
    const selectedOrderIds = this.form.value.orders
      .map((v, i) => v ? this.orders[i].name : null)
      .filter(v => v !== null);

    this.addFirestore.addAreasInterest(selectedOrderIds, this.uid);
  }
}