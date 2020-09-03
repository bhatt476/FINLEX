import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  constructor(
    private mainService: MainService
    ) { }
    tableData;
    tableData2;
    tableData3;
    
    ngOnInit(): void {
      this.mainService.getData1().subscribe((data1) => {
        this.tableData = data1;
      });
      this.mainService.getData2().subscribe((data2) => {
        this.tableData2 = data2;
      });
      this.mainService.getData3().subscribe((data3) => {
        this.tableData3 = data3;
      });
    }
  }
  