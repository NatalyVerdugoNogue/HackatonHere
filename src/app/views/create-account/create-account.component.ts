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

  PreProfileForm:any={
    name
  }


  constructor(private formBuilder: FormBuilder, private signupFirebase: AuthService, private addProfileFirestore: ProfileService) {
    this.createCreateAccountForm();
  }

  ngOnInit() {
  }

  createCreateAccountForm() {
    this.createAccountForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      name: ['', Validators.required],
      nameProyect: ['', Validators.required],
      workItem: ['', Validators.required]
    });
  }


  onRegister() {
    this.signupFirebase.signup(this.createAccountForm.value.email,
      this.createAccountForm.value.password)
      .then(infoAuth => {
        console.log(this.createAccountForm.value.name,
          this.createAccountForm.value.nameProyect,
          this.createAccountForm.value.workItem);
        this.addProfileFirestore.addProfileData
          (infoAuth.user.email,
          infoAuth.user.uid)


          .then(infoFS => {
            console.log('OK FS');

            // routing a muro
          }
          ).catch(
            error => {
              console.log("No se creo el perfil correctamente", error);
            }
          )
      })
      .catch(error => {
        // routing volver a crear cuenta
        console.log(error);
      });
    this.createAccountForm.reset();
  }
}
