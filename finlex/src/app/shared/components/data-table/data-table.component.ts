import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit, AfterViewInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  constructor() { }
  @Input() tableData: any;
  title = 'app';
  pageOptions = [1, 10, 25, 50, 100];
  columnDefs;
  rowData;
  gridOptions = {
    pagination: true,
    paginationPageSize : 10,
    domLayout: 'autoHeight'
  };
  searchText;
  ngOnInit(): void {
    this.rowData = this.tableData;
    let headers;
    if (this.rowData.length && this.rowData[0]){
      headers = Object.keys(this.rowData[0]);
    }
    this.columnDefs = headers.map((header) => {
      return {
        headerName: this.capitalizeFirstLetter(header),
        field: header,
        sortable: true,
        filter: true,
        resizable: true,
        autoHeight: true
      };
    });
  }

  ngAfterViewInit(){
    this.agGrid.api.sizeColumnsToFit();
  }

  capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  pageFunction(pageSize){
    this.agGrid.paginationPageSize = pageSize;
    this.agGrid.cacheBlockSize = pageSize;
    this.agGrid.api.onSortChanged();
  }


  onQuickFilterTypeChanged(text) {
    this.agGrid.api.setQuickFilter(text);
}
}
