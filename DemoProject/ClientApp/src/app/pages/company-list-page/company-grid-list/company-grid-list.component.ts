import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { DataFile } from '../../conflicts-page/abstracts/data-file.model';
import { DataFileService } from '../../conflicts-page/abstracts/data-file.service';
import { DataFileStore } from '../../conflicts-page/abstracts/data-file.store';
import {  MatTableDataSource,MatSort } from '@angular/material';
import { Router} from '@angular/router';
@Component({
  selector: 'company-grid-list',
  templateUrl: './company-grid-list.component.html',
  styleUrls: ['./company-grid-list.component.css']
})
export class companyGridListComponent {
  displayedColumns: string[] = [
    'companyName',
    'noOfConflicts',
    'mostRecent',
    'contactsName',
    'contactsEmail',
    'contactsNumber'
  ];
  dataSource: any = [];

  @Input() public dataSet: any[];
  @Input() public searchString: string;

  @ViewChild(MatSort) sort: MatSort;
  public isLoading :boolean = false;


  
  constructor(CONFLICT TYPE 
    private dataFileFileService: DataFileService,
    private dataFileStore: DataFileStore,
    private router: Router,
  ) {}


  ngOnInit() {
    this.dataFileStore.loading$.subscribe(value => {
      this.isLoading = value;
    });
  }
  onTabClicked(value: any) {
    this.dataSource = new MatTableDataSource<any>(value);
    this.dataSource.sort = this.sort;
  }
  navigateToConflicts(navigateToConflicts){
    this.router.navigate(['farm/conflicts/' +  navigateToConflicts]);
  }
  public trackByFn(index: number, dataFile: DataFile) {
    return dataFile.rawId;
  }
}
