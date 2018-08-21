import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

import { AbstractCumulativeDataStore } from './abstract.cumulative.store';

import { DataFileService } from './data-file.service';

import { DataFile } from './data-file.model';

@Injectable()
export class DataFileStore extends AbstractCumulativeDataStore<DataFile> {
  public filter$: ReplaySubject<any> = new ReplaySubject(1);
  public totalDataFiles$: Subject<number> = new Subject<number>();
  constructor(private api: DataFileService) {
    super();
  }

  public addFilters(value: any): void {
    this.filter$.next(value);
  }

  public fetch(companyId:string): Promise<DataFile[]> {
    this.loading = true;
    return this.api
      .get(companyId)
      .toPromise()
      .then(
        response => {
          this.loading = false;
          this.addFilters(response);
          this.totalDataFiles$.next(response.length);
          return this.add(response);
        },
        err => {
          this.loading = false;
          throw err;
        }
      );
  }

  public fetchCompanyDetails(): Promise<any[]> {
    this.loading = true;
    return this.api
      .getCompanyList()
      .toPromise()
      .then(
        response => {
          this.loading = false;
           this.addFilters(response);
          return this.addCompany(response);
        },
        err => {
          this.loading = false;
          throw err;
        }
      );
  }
}
