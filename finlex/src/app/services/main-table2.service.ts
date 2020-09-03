import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainTable2Service {

  constructor(private httpClient: HttpClient) { }
  getData2(){
    return this.httpClient.get('assets/data2.json');
  }
}
