import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-accept-terms',
  templateUrl: './accept-terms.component.html',
  styleUrls: ['./accept-terms.component.css']
})
export class AcceptTermsComponent implements OnInit {

  marked: boolean = false;

  constructor(private addFirestore: ProfileService, private firebaseAuth: AuthService) {

  }

  ngOnInit() {
  }


  toggleVisibility(e) {
    this.marked = e.target.checked;
    console.log(this.marked);
    if (this.marked === false) {

      //mensaje debe aceptar para crear 
    }

  }

  submit() {
    // routing a crear cuenta 

  }
}
