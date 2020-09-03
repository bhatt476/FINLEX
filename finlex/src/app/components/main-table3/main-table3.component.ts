import { Component, OnInit } from '@angular/core';
import { MainTable3Service } from '../../services/main-table3.service';

@Component({
  selector: 'app-main-table3',
  templateUrl: './main-table3.component.html',
  styleUrls: ['./main-table3.component.scss']
})
export class MainTable3Component implements OnInit {
  tableData3;
  constructor(
    private mainService: MainTable3Service
  ) { }

  ngOnInit(): void {
    this.mainService.getData3().subscribe((data3) => {
      this.tableData3 = data3;
    });
  }

}
