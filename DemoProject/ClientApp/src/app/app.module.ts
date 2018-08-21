import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SharedModule } from './shared-module/shared-module.module';
import { MaterialModule } from './material-module/material-module';


import { CnhPageMainComponent } from './pages/main-page/main-page.component';
import { conflictsComponent } from './pages/conflicts-page/conflicts-page.component';
import { companylistPageComponent } from './pages/company-list-page/company-list-page.component';

import { companyGridListComponent } from './pages/company-list-page/company-grid-list/company-grid-list.component';

import { PipeModule } from './pipe/pipe-module';

import { CnhInboxListComponent } from './pages/conflicts-page/cnh-inbox-list/cnh-inbox-list.component';
import { CnhSearchComponent } from './pages/conflicts-page/cnh-search/cnh-search.component';

import { DataFilesFilterService } from './pages/conflicts-page/abstracts/data-files-filters.service';
import { DataFileStore } from './pages/conflicts-page/abstracts/data-file.store';
import { DataFileService } from './pages/conflicts-page/abstracts/data-file.service';



@NgModule({
  declarations: [
    AppComponent,
    CnhPageMainComponent,
    conflictsComponent,
    companylistPageComponent,
    CnhInboxListComponent,
    companyGridListComponent,
    CnhSearchComponent
  ],
  imports: [BrowserAnimationsModule,HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    PipeModule
  ],
  providers: [
    DataFilesFilterService,
    DataFileStore,
    DataFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
