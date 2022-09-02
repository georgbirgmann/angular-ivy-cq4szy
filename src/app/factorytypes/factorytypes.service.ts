import { Injectable } from '@angular/core';
import { FactoryType } from './factorytype';
import { FACTORYTYPES } from './mock-factorytypes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FactorytypesService {

  private URL = 'https://customerfactory-backend.congstar-congo.aoe.host/api/types/true/1/1';

  constructor(private http: HttpClient) { }

  getTypes(): FactoryType[] {return FACTORYTYPES;}

  getTypesWS(): Observable<FactoryType[]> {
    return this.http.get<FactoryType[]>(this.URL);
  }
}