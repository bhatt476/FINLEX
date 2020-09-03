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
  getData2(){
    return this.httpClient.get('assets/data2.json');
  }
  getData3(){
    return this.httpClient.get('assets/data3.json');
  }


}
