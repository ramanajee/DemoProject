import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../../material-module/material-module';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared-module/shared-module.module';

import { InboxComponent } from './inbox.component';

import { CnhSearchComponent } from './cnh-search/cnh-search.component';
import { CnhInboxListComponent } from './cnh-inbox-list/cnh-inbox-list.component';
import { CnhInboxSorterComponent } from './cnh-inbox-sorter/cnh-inbox-sorter.component';
import { CnhCollapsibleComponent } from './cnh-collapsible/cnh-collapsible.component';
import { GroupByPipe } from './pipe/group-by.pipe';
//import { CnhInboxCardComponent } from './cnh-inbox-card/cnh-inbox-card.component';
import { CnhSortableItemComponent } from './cnh-sortable-item/cnh-sortable-item.component';
import { CnhHighlightPipe } from './pipe/cnh-highlights-pipe';
import {
  DataFileSortBy,
  GlobalSortingService
} from './filter-Sorting/global-sorting-service';
import {
  DataFilesFilterService,
  IFilter
} from './abstracts/data-files-filters.service';
import { DataFileStore } from './abstracts/data-file.store';
import { DataFileService } from './abstracts/data-file.service';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { DataFile } from './abstracts/data-file.model';
import { ISortObj } from './cnh-sortable-item/cnh-sortable-item.component';
import { ReplaySubject, Subject } from 'rxjs';

describe('InboxComponent', () => {
  let component: InboxComponent;
  let fixture: ComponentFixture<InboxComponent>;
  class MockDataFilesFilterService {
    filteredDataFiles$: Observable<DataFile[]>;
    changeFilter(filter) {}
  }
  class MockDataFileStore {
    public fetch() {
      return [];
    }
  }
  class MockDataFileService {
    filteredDataFiles$: Observable<DataFile[]>;
  }
  class MockGlobalSortingService {
    public sortDefault$: BehaviorSubject<ISortObj> = new BehaviorSubject<
      ISortObj
    >(null);
    public isActive$: BehaviorSubject<string> = new BehaviorSubject<string>(
      null
    );
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        HttpClientModule,
        MaterialModule
      ],
      declarations: [
        InboxComponent,
        CnhSearchComponent,
        CnhInboxListComponent,
        CnhInboxSorterComponent,
        CnhCollapsibleComponent,
        GroupByPipe,
        CnhSortableItemComponent,
        CnhHighlightPipe
      ],
      providers: [
        {
          provide: DataFilesFilterService,
          useClass: MockDataFilesFilterService
        },
        { provide: DataFileStore, useClass: MockDataFileStore },
        { provide: GlobalSortingService, useClass: MockGlobalSortingService },
        { provide: DataFileService, useClass: MockDataFileService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('onSearchValueChange function should call changeFilter', () => {
    spyOn(component._dataFilesFilterService, 'changeFilter');
    component.onSearchValueChange('test');
    expect(component._dataFilesFilterService.changeFilter).toHaveBeenCalled();
  });
});
