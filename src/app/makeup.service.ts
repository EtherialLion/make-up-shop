import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Makeup} from "./makeup.interface";

@Injectable({
  providedIn: 'root'
})
export class MakeupService {

  constructor(private httpClient: HttpClient) { }

  getMakeUpInfo(type: string): Observable<Makeup[]> {
    return this.httpClient.get<Makeup[]>('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + type)
  }
}
