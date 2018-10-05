import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
    { id: 100, name: 'Informática', img: "../../../assets/img/informatica.png" },
    { id: 200, name: 'Alimentos', img: "../../../assets/img/alimentos.png" },
    { id: 300, name: 'Salud y Farmacéutica', img: "../../../assets/img/salud.png" },
    { id: 400, name: 'Servicios financieros', img: "../../../assets/img/serviciosfinancieros.png" },
    { id: 500, name: 'Transporte', img: "../../../assets/img/transportes.png" },
    { id: 600, name: 'Otros', img: "../../../assets/img/otros.png" },
  ];

  constructor(private formBuilder: FormBuilder, private addFirestore: ProfileService, private firebaseAuth: AuthService, private router: Router) {

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
    this.router.navigate(['/ubicacion']);
  }

  return() {
    this.router.navigate(['/nombre']);
  }
}