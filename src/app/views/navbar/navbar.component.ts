import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  options: FormGroup;
  opened = true;
  over = 'side';
  expandHeight = '100vh';
  collapseHeight = '10vh';
  displayMode = 'flat';
  watcher: Subscription;

  userName: any;
  photo: any;
  email: any;

  constructor(private logoutFirebase: AuthService) {

  }

  ngOnInit() {
  }

  logoutAuth() {
    this.logoutFirebase.logout().then(
      info => {
        console.log(info)
      }
    )
  }
}
