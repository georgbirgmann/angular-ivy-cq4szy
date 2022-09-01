import { Component, OnInit } from '@angular/core';
import { FactoryType } from './factorytype';
import { FACTORYTYPES } from './mock-factorytypes';
import { FactorytypesService } from './factorytypes.service';

@Component({
  selector: 'app-factorytypes',
  templateUrl: './factorytypes.component.html',
  styleUrls: ['./factorytypes.component.css']
})
export class FactorytypesComponent implements OnInit {

  types: FactoryType[] = [];

  constructor(private typeService: FactorytypesService) { }

  ngOnInit(): void { this.getTypes();
  }

  getTypes(): void {this.types = this.typeService.getTypes();}

}