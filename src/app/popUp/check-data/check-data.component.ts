import { Component, OnInit, NgModule, Pipe, PipeTransform, enableProdMode } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material'
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-check-data',
  templateUrl: './check-data.component.html',
  styleUrls: ['./check-data.component.css']
})
export class CheckDataComponent implements OnInit {

  miVariable: boolean = true;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {


  }

  submit() {
    console.log(this.miVariable);
  }
}
