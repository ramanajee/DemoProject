import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component'


@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent,HeaderComponent],
  exports: [LoaderComponent,HeaderComponent]
  
})
export class SharedModule {}
