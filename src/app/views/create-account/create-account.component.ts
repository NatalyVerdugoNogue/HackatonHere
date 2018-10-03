import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccountForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private signupFirebase: AuthService, private addProfileFirestore: ProfileService) {
    this.createCreateAccountForm();

  }

  ngOnInit() {
    // this.signupFirebase.user.subscribe(user => {

    //   this.uid = user.uid;
    //   console.log('aaa', this.uid);
    // });
  }

  createCreateAccountForm() {
    this.createAccountForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onRegister() {
    this.signupFirebase.signup(this.createAccountForm.value.email,
      this.createAccountForm.value.password)
      .then((info) => {
        this.addProfileFirestore.addProfileAuth(
          this.createAccountForm.value.name,
          this.createAccountForm.value.email,
          info.user.uid);

        this.createAccountForm.reset();

        // // routing a muro
      }
      ).catch(
        error => {
          console.log("No se creo el perfil correctamente", error);

          // routing a crear Inicio 
        }
      )
  }
}
