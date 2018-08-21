import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataFileStore } from './abstracts/data-file.store';
import { DataFile } from './abstracts/data-file.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {
  DataFilesFilterService,
  IFilter
} from './abstracts/data-files-filters.service';

@Component({
  selector: 'conflicts-page',
  templateUrl: './conflicts-page.component.html',
  styleUrls: ['./conflicts-page.component.scss']
})
export class conflictsComponent implements OnInit {
  public fileList$: Observable<DataFile[]>;
  public currentSearch$: Observable<string>;
  public searchValue: string = '';
  constructor(
    public _dataFilesFilterService: DataFilesFilterService,
    private dataFileStore: DataFileStore,
    public route: ActivatedRoute
  ) {
    this.fileList$ = combineLatest(
      this._dataFilesFilterService.filteredDataFiles$
    ).pipe(
      map(([files]) => {
       
        return files;
      })
    );
  }

  public ngOnInit() {
    this.dataFileStore.fetch(this.route.snapshot.paramMap.get('companyId'));
    this.currentSearch$ = this._dataFilesFilterService.activeSearch$;
  }

  public onSearchValueChange(value: string) {
    const searchFilter: IFilter = {
      type: 'searchString',
      target: ['Name', 'Source','ConflictType'],
      value
    };
    this._dataFilesFilterService.changeFilter(searchFilter);
  }
}
