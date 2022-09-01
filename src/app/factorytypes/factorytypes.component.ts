import { Component, OnInit } from '@angular/core';
import { FactoryType } from './factorytype';
import { FACTORYTYPES } from './mock-factorytypes';

@Component({
  selector: 'app-factorytypes',
  templateUrl: './factorytypes.component.html',
  styleUrls: ['./factorytypes.component.css']
})
export class FactorytypesComponent implements OnInit {

  types = FACTORYTYPES;

  constructor() { }

  ngOnInit() {
  }

}