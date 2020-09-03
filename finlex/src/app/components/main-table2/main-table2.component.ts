import { Component, OnInit } from '@angular/core';
import { MainTable2Service } from '../../services/main-table2.service';

@Component({
  selector: 'app-main-table2',
  templateUrl: './main-table2.component.html',
  styleUrls: ['./main-table2.component.scss']
})
export class MainTable2Component implements OnInit {

  constructor(
    private mainService: MainTable2Service
  ) { }
  tableData2;

  ngOnInit(): void {
    this.mainService.getData2().subscribe((data2) => {
      this.tableData2 = data2;
    });
  }

}
