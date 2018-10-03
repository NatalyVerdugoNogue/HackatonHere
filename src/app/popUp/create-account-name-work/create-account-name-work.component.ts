import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';


@Component({
  selector: 'app-create-account-name-work',
  templateUrl: './create-account-name-work.component.html',
  styleUrls: ['./create-account-name-work.component.css']
})
export class CreateAccountNameWorkComponent implements OnInit {

  createAccountWorkForm: FormGroup;

  name: string;
  uid: string;
  infoUser: any;

  constructor(private formBuilder: FormBuilder, private firebaseAuth: AuthService, private firestore: ProfileService) {
    this.addCreateAccountWorkForm();
  }

  ngOnInit() {
    this.firebaseAuth.user.subscribe(user => {
      this.uid = user.uid;
    });
    this.infoUser = this.firestore.getInfoProfile(this.uid)
    console.log(this.infoUser);

  }

  addCreateAccountWorkForm() {
    this.createAccountWorkForm = this.formBuilder.group({
      nameWork: ['', Validators.required]
    })
  }

  onRegisterWork() {

  }

}
