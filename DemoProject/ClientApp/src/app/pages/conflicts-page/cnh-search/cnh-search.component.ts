import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cnh-search',
  templateUrl: './cnh-search.component.html',
  styleUrls: ['./cnh-search.component.css']
})
export class CnhSearchComponent implements OnInit {
  @Input() public placeholder: string;
  @Input() public value: string = '';
  @Output() public valueChange = new EventEmitter<string>();

  constructor() {
    //
  }

  public ngOnInit() {
    //
  }

  public emitSearchValue(value: any) {
    this.valueChange.emit(value);
  }
}
