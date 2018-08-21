import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataFileService {
  private httpOptions: any;
  httpopt: any;

  constructor(private http: HttpClient) {
    
  }

  public get(companyId : string): Observable<any[]> {
    return this.http
      .get('./assets/data' + companyId + '.json', )
      .pipe(map((response: any) => {
        console.log(response.Values,"response");
      return response.Values;
      }))
  }

  public getCompanyList():Observable<any[]>{
    return this.http
    .get('./assets/company.json')
    .pipe(map((response: any) => {
      console.log(response,"response");
    return response;
    }))
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an ErrorObservable with a user-facing error message
    return;
  }
}
