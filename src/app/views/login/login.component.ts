import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginFirebase: AuthService, private router: Router) {
    this.createLoginForm();
  }



  ngOnInit() { }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onLogin() {
    this.loginFirebase.login(this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
        this.router.navigate(['/map']);

      })
      .catch(() => {
        this.loginForm.reset();
        this.router.navigate(['/login']);

      })
  }

  createAccount() {
    this.router.navigate(['/terminos']);
  }

}
