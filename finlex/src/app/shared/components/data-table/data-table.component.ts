import { Component, ViewChild, TemplateRef, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html'
})

export class DataTableComponent implements OnInit  {
  options = {};
  data = [];
  columns: any = {};

  optionsBasicNoData = {};
  dataBasicNoData = [];
  columnsBasicNoData: any = {};

  @Input() tableData: any;
  constructor(private appService: MainService) { }
  ngOnInit(): void {
    let headers;
    if (this.tableData.length && this.tableData[0]){
      headers = Object.keys(this.tableData[0]);
    }
    this.columns = headers.map((header) => {
      return {
        title: this.capitalizeFirstLetter(header),
        key: header,
      };
    });
  }

  capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
