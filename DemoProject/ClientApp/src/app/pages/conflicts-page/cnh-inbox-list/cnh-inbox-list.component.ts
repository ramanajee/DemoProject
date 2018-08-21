import { Component, Input, ViewChild } from '@angular/core';
import { DataFile } from '../abstracts/data-file.model';
import { DataFileService, IConflicts } from '../abstracts/data-file.service';
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

  conflictResponse: IConflicts;

  @Input() public dataSet: any[];
  @Input() public searchString: string;
  @ViewChild(MatSort) sort: MatSort;

  public isLoading :boolean = false;
  
  constructor(
    private dataFileService: DataFileService,
    private dataFileStore: DataFileStore
  ) {}

  ngOnInit() {
    console.log(this.dataSet, "dataSet");
    this.getCompanyConflicts();
    this.dataFileStore.loading$.subscribe(value => {
      this.isLoading = value;
    });
  }

  getCompanyConflicts(): void {
    this.dataFileService.getConflictsByCompanyId('').subscribe(response => {
      this.conflictResponse = response;
      this.onTabClicked(this.conflictResponse.Values);
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
