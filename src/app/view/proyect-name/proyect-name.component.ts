import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyect-name',
  templateUrl: './proyect-name.component.html',
  styleUrls: ['./proyect-name.component.css']
})
export class ProyectNameComponent implements OnInit {

  createAccountWorkForm: FormGroup;

  name: string;
  uid: string;
  infoUser: any;
  dataUser: any;

  constructor(private formBuilder: FormBuilder, private firebaseAuth: AuthService, private firestore: ProfileService, private router: Router) {
    this.addCreateAccountWorkForm();
  }

  ngOnInit() {
    this.firebaseAuth.user.subscribe(user => {
      this.uid = user.uid;
    });

    this.firestore.getInfoProfile().subscribe(
      profiles => {
        this.dataUser = profiles.filter(
          profile => profile.uid === this.uid)
        // this.name = this.dataUser[0].name;
        // console.log(this.name);
        // console.log(this.dataUser[0].name)
      })
  }
  addCreateAccountWorkForm() {
    this.createAccountWorkForm = this.formBuilder.group({
      nameWork: ['', Validators.required]
    })
  }

  onRegisterWork() {
    this.firestore.addNameWork(this.createAccountWorkForm.value.nameWork, this.uid);
    this.router.navigate(['/check']);
  }

  return() {
    this.router.navigate(['/crear-cuenta']);
  }

}
