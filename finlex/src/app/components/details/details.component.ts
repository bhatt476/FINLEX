import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  inputLabels;
  data;
  constructor(
    private detailsService: DetailsService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    console.log('data', this.detailsService.getData());
    this.data = this.detailsService.getData();
    if (this.data){
      this.inputLabels = Object.keys(this.data);
    }
    else{
      this.goToMain();
    }
  }

  goToMain(){
    this.router.navigate(['/data']);
  }

}
