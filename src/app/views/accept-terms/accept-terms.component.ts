import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accept-terms',
  templateUrl: './accept-terms.component.html',
  styleUrls: ['./accept-terms.component.css']
})
export class AcceptTermsComponent implements OnInit {

  marked: boolean = false;

  constructor(private addFirestore: ProfileService, private firebaseAuth: AuthService, private router: Router) {

  }

  ngOnInit() {
  }


  toggleVisibility(e) {
    this.marked = e.target.checked;
    if (this.marked === false) {

      //mensaje debe aceptar para crear 
    }

  }

  caccount() {
    this.router.navigate(['/crear-cuenta']);
  }

  login() {
    this.router.navigate(['/login']);
  }
}
