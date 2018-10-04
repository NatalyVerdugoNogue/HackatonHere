import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-check-data',
  templateUrl: './check-data.component.html',
  styleUrls: ['./check-data.component.css']
})
export class CheckDataComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
  }

  // createCheck() {
  //   this.form = this.formBuilder.group({
  //     Informática: [''],
  //     Alimentos: [''],
  //     ServiciosFinancieros: [''],
  //     Transporte: [''],
  //     SaludyFarmaceutica: [''],
  //     Otros: ['']
  //   });
  // }


}