import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }
  data: Object;

  setData(data){
    this.data = data;
  }

  getData(){
    return this.data;
  }
}
