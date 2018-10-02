import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // onLogin() {
  //   this.signupFirebase.login(this.createAccountForm.value.email,
  //     this.createAccountForm.value.password)
  //     .then(() => {

  //     })
  //     .catch(() => {

  //     })
  // }

  // onLogout() {
  //   this.signupFirebase.logout()
  //     .then(() => {

  //     })
  //     .catch(() => {

  //     })
  // }
}
