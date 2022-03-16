import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgGenerateIconsService } from 'src/app/services/svg-generate.service';

import { SvgComponent } from './svg.component';
import { KarmaComponent } from './karma/karma.component';
import { ContainerRefDirective } from 'src/app/directives/container-ref.directive';

@NgModule({
  declarations: [
    SvgComponent,
    KarmaComponent,
    ContainerRefDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [SvgComponent],
  providers: [SvgGenerateIconsService]
})
export class SvgModule { }
