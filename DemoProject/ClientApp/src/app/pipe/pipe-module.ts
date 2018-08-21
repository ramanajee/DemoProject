import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupByPipe } from './group-by.pipe';
import { CnhHighlightPipe } from './cnh-highlights-pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [GroupByPipe,CnhHighlightPipe],
  exports: [GroupByPipe,CnhHighlightPipe]
  
})
export class PipeModule {}
