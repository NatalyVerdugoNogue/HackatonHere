import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  uid: string;

  constructor(private firebaseAuth: AuthService) { }

  ngOnInit() {
    setTimeout(() => this.cond(), 2000);

  }

  cond() {
    this.firebaseAuth.user.subscribe(user => {
      if (user === null) {
        console.log("null");

        // routing a crear cuenta
      } else {
        console.log("a muro");

        // routing a muro
      }
    })
  }

}
