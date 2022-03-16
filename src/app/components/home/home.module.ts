import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SvgModule } from '../svg/svg.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SvgModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
