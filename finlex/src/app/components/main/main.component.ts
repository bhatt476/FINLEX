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
  ngOnInit(): void {
    this.tableData = this.mainService.getData();
  }
}
