import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class MainService {
  constructor(private httpClient: HttpClient) {}

  getData1(){
    return this.httpClient.get('assets/data1.json');
  }
}
