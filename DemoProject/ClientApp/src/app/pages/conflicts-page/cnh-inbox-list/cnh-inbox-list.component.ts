import { Component, Input, ViewChild } from '@angular/core';
import { DataFile } from '../abstracts/data-file.model';
import { DataFileService } from '../abstracts/data-file.service';
import { DataFileStore } from '../abstracts/data-file.store';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'cnh-inbox-list',
  templateUrl: './cnh-inbox-list.component.html',
  styleUrls: ['./cnh-inbox-list.component.css']
})
export class CnhInboxListComponent {
  displayedColumns: string[] = [
    'Name',
    'ConflictType',
    'Source',
    'CreatedTime',
    'Resolve'
  ];
  dataSource: any = [];

  @Input() public dataSet: any[];
  @Input() public searchString: string;

  @ViewChild(MatSort) sort: MatSort;
  public isLoading :boolean = false;


  
  constructor(
    private dataFileFileService: DataFileService,
    private dataFileStore: DataFileStore
  ) {}


  ngOnInit() {

    console.log(this.dataSet,"dataSet");
    this.dataFileStore.loading$.subscribe(value => {
      this.isLoading = value;
    });
  }
  onTabClicked(value: any) {
    this.dataSource = new MatTableDataSource<any>(value);
    console.log(this.sort);
    this.dataSource.sort = this.sort;
  }
  public trackByFn(index: number, dataFile: DataFile) {
    return dataFile.rawId;
  }
}
