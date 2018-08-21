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

  getConflictsByCompanyId(id: string): Observable<IConflicts> {
    return this.http.get<IConflicts>('https://euedgfuncm01.azurewebsites.net/api/allconflicts?code=LFnz8tmkbMaBxsGaCKvyeq6/5kzvlaVXu3wbHoCwtdG3hVyVPRVGpg==').pipe(map(response => response));
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



/** Interfaces */

export interface IConflicts {
  Values: Value[];
  Filters: Filters;
  Code: number;
  Message: string;
}

export interface Filters {
}

export interface Value {
  CompanyID: string;
  VehicleID: string;
  UserID: string;
  Type: ValueType;
  ID: string;
  Name: ConflictCategory;
  ConflictCategory: ConflictCategory;
  ConflictType: ConflictType;
  Source: Source;
  Fields: Field[];
  ConflictItem: ConflictItem;
  CreatedTime: string;
  status: null;
}

export enum ConflictCategory {
  Boundary = "Boundary",
  Task = "Task",
}

export interface ConflictItem {
  ID: string;
  Name?: string;
  Type: ConflictCategory;
  TaskType?: TaskType;
  FieldID?: string;
  GrowerID?: string;
  CompanyID?: string;
  OperationID?: string;
  CropName?: CropName;
  Year?: number;
  MainValue?: MainValue;
  LoggedArea?: ActiveArea;
  ActiveArea?: ActiveArea;
  OutlineArea?: ActiveArea;
  Products?: Product[];
  TaskDate?: string;
  TileUrl?: null;
  bbox?: Bbox;
  geometry?: GeometryClass;
  Geometry?: GeometryClass;
  Active?: boolean;
}

export interface ActiveArea {
  Value: number;
  Uom: string;
}

export enum CropName {
  Canola = "Canola",
  CloverWhite = "Clover-White",
  Corn = "Corn",
  Lentils = "Lentils",
  None = "None",
  PeasChick = "Peas-Chick",
  WheatSpring = "Wheat-Spring",
  WheatWinter = "Wheat-Winter",
}

export interface GeometryClass {
  type: GeometryType;
  properties: Filters;
  geometry: GeometryGeometry;
}

export interface GeometryGeometry {
  type: PurpleType;
  coordinates: Array<Array<number[]>>;
}

export enum PurpleType {
  Polygon = "Polygon",
}

export enum GeometryType {
  Feature = "Feature",
}

export interface MainValue {
  Name: Name | null;
  Value: number;
  Uom: string;
}

export enum Name {
  AsAppliedAvg = "As Applied Avg",
}

export interface Product {
  ProductName: ProductName;
  SUID: null;
  ProductTotals: ActiveArea;
}

export enum ProductName {
  Corn = "Corn",
  Corn1234Corn2345 = "CORN1234, CORN2345",
  Crp = "CRP",
  Dkc6208 = "DKC 62-08",
  Dkc6297 = "DKC 62-97",
  Dkc6297Dkc6333 = "DKC 62-97, DKC 63-33",
  Dkc6333 = "DKC 63-33",
  Fert = "FERT",
  The62976333 = "62-97, 63-33",
  Unknown = "Unknown",
}

export enum TaskType {
  Harvesting = "Harvesting",
  Planting = "Planting",
  Spraying = "Spraying",
  Unknown = "Unknown",
}

export interface Bbox {
  minx: number;
  miny: number;
  maxx: number;
  maxy: number;
}

export enum ConflictType {
  GFFMismatch = "GFFMismatch",
  GeoSpatial = "GeoSpatial",
}

export interface Field {
  Type: FieldType;
  ID: string;
  Name: string;
  FarmID: string;
  FarmName: string;
  GrowerID: string;
  GrowerName: string;
  Area: ActiveArea;
  bbox: Bbox | null;
  geometry: GeometryClass | null;
  Boundaries: Boundary[];
}

export interface Boundary {
  ID: string;
  Geometry: GeometryClass;
  Active: boolean;
  Area: ActiveArea;
  Bounds: Bbox;
}

export enum FieldType {
  Field = "Field",
}

export enum Source {
  Grower = "Grower",
  Vehicle = "Vehicle",
}

export enum ValueType {
  Conflict = "Conflict",
}

