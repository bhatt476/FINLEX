import { Component, ViewChild, TemplateRef, OnInit, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import {DetailsService} from 'src/app/services/details.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html'
})

export class DataTableComponent implements OnInit  {
  @ViewChild('buttonsTemplate') buttonsTemplate: TemplateRef<any>;
  options = {};
  data = [];
  columns: any = [];
  dataBasicNoData = [];
  columnsBasicNoData: any = {};
  headers;
  @Input() tableData: any;
  constructor(
    private appService: MainService,
    private router: Router,
    private detailsService: DetailsService
    ) { }
  ngOnInit(): void {
    if (this.tableData?.length && this.tableData[0]){
      this.headers = Object.keys(this.tableData[0]);
      this.columns = this.headers.map((header) => {
        return {
          title: this.capitalizeFirstLetter(header),
          key: header,
          // width: 50
        };
      });
    }
    else{
      this.tableData = [];
    }
    this.options = {
      rowDetailTemplate: this.buttonsTemplate,
      emptyDataMessage : 'No data available in table'
    };
  }

  ngAfterViewInit(){
    setTimeout(() => {
      if (this.columns){
        this.columns.push({title: 'Actions', cellTemplate: this.buttonsTemplate});
        this.columns = this.columns.splice(0, this.columns.length);
      }
    });
  }

  capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  viewDetails(data){
    console.log('event is', data);
    this.detailsService.setData(data);
    this.router.navigate(['/data/details']);
  }
}
