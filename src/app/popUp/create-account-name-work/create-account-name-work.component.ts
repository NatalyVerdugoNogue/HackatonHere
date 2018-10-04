import { Component, OnInit, Input } from '@angular/core';
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
  @Input() dataUser: any;

  constructor(private formBuilder: FormBuilder, private firebaseAuth: AuthService, private firestore: ProfileService) {
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
    this.createAccountWorkForm.reset();
  }

}
