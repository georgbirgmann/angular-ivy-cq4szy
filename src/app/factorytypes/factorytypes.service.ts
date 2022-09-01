import { Injectable } from '@angular/core';
import { FactoryType } from './factorytype';
import { FACTORYTYPES } from './mock-factorytypes';

@Injectable({
  providedIn: 'root',
})
export class FactorytypesService {

  constructor() { }

  getTypes(): FactoryType[] {return FACTORYTYPES;}
}