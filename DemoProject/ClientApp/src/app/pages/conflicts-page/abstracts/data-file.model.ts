import * as moment from 'moment';
import { AbstractData } from './abstract-data.model';
import { Moment } from 'moment';

export class DataFile extends AbstractData {
  constructor(rawData: any) {
    super(rawData);

    this.dateFormat = 'unix';
  }

  public get size(): number {
    return this.rawData.dimension || null;
  }

  public get creationDate(): Date {
    return this.getDate(this.rawData && this.rawData.creationTime);
  }

  private get userOwnerName(): string {
    return this.rawData.userOwnerName || null;
  }

  private get userOwnerSurname(): string {
    return this.rawData.userOwnerSurname || null;
  }

  public get source(): string {
    return `${this.userOwnerName} ${this.userOwnerSurname}`;
  }

  public get extension(): string {
    return this.rawData.extension || null;
  }

  public get bytesToSize(): string {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (this.size === 0) {
      return null;
    }
    const i: number = parseInt(
      String(Math.floor(Math.log(this.size) / Math.log(1024))),
      10
    );
    if (i === 0) {
      return `${this.size} ${sizes[i]}`;
    }
    return `${(this.size / 1024 ** i).toFixed(1)} ${sizes[i]}`;
  }

  // @REFACTOR: find a better way to do this (gropBy namedDate). Should use momentLocale setting
  public get namedDate(): string {
    const reference: Moment = moment.utc(this.creationDate);
    return reference.clone().calendar(moment.utc(), {
      sameDay: '[Today]',
      lastDay: '[Yesterday]',
      lastWeek: '[This week]',
      sameElse: (now: Moment) => {
        if (now.month() === reference.month()) {
          return '[This month]';
        } else {
          return '[Older]';
        }
      }
    });
  }
}
