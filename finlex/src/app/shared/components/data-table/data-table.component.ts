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
  @ViewChild('buttonsTemplate') buttonsTemplate: TemplateRef<any>;

  optionsBasicNoData = {};
  dataBasicNoData = [];
  columnsBasicNoData: any = {};
  headers;
  @Input() tableData: any;
  constructor(private appService: MainService) { }
  ngOnInit(): void {
    if (this.tableData.length && this.tableData[0]){
      this.headers = Object.keys(this.tableData[0]);
    }
    this.columns = this.headers.map((header) => {
      return {
        title: this.capitalizeFirstLetter(header),
        key: header,
        width: 50
      };
    });
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.columns.push({title: 'Actions', cellTemplate: this.buttonsTemplate});
      this.columns = this.columns.splice(0, this.columns.length);
    });

  }

  capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  viewDetails(event){
    console.log('event is', event);
  }
}
