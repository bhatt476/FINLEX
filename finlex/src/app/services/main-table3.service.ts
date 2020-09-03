import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainTable3Service {

  constructor(private httpClient: HttpClient) { }
  getData3(){
    return this.httpClient.get('assets/data3.json');
  }
}
