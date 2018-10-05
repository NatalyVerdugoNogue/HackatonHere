import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  return() {
    this.router.navigate(['/map']);
  }

  splash() {
    this.router.navigate(['/splash'])
  }
}

