import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataFileStore } from '../conflicts-page/abstracts/data-file.store';
import { DataFile } from '../conflicts-page/abstracts/data-file.model';

import {
  DataFilesFilterService,
  IFilter
} from '../conflicts-page/abstracts/data-files-filters.service';

@Component({
  selector: 'company-list-page',
  templateUrl: './company-list-page.component.html',
  styleUrls: ['./company-list-page.component.scss']
})
export class companylistPageComponent implements OnInit {
  public fileList$: Observable<DataFile[]>;
  public currentSearch$: Observable<string>;
  public searchValue: string = '';
  constructor(
    public _dataFilesFilterService: DataFilesFilterService,
    private dataFileStore: DataFileStore
  ) {
    this.fileList$ = combineLatest(
      this._dataFilesFilterService.filteredCompanyList$
    ).pipe(
      map(([files]) => {
        console.log(files);
        return files;
      })
    );
  }

  public ngOnInit() {
    this.dataFileStore.fetchCompanyDetails();

    this.currentSearch$ = this._dataFilesFilterService.activeSearch$;
  }

  public onSearchValueChange(value: string) {
    const searchFilter: IFilter = {
      type: 'searchString',
      target: ['companyName', 'mostRecent'],
      value
    };
    this._dataFilesFilterService.changeFilter(searchFilter);
  }
}
