import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgGenerateIconsService } from 'src/app/services/svg-generate.service';
import { ContainerRefDirective } from 'src/app/directives/container-ref.directive';

import { SvgComponent } from './svg.component';
import { KarmaComponent } from './karma/karma.component';
import { LabsComponent } from './labs/labs.component';

@NgModule({
  declarations: [
    SvgComponent,
    KarmaComponent,
    LabsComponent,
    ContainerRefDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [SvgComponent],
  providers: [SvgGenerateIconsService]
})
export class SvgModule { }
