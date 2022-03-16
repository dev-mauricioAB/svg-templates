import { Injectable } from '@angular/core';

import { SvgIcon } from './../models/svg';

import { KarmaComponent } from '../components/svg/karma/karma.component';
import { LabsComponent } from './../components/svg/labs/labs.component';

@Injectable()
export class SvgGenerateIconsService {
  public getSvgIconsComponents(): SvgIcon[] {
    return [
      new SvgIcon(
        KarmaComponent,
        {
          name: 'svg_karma'
        }
      ),
      new SvgIcon(
        LabsComponent,
        {
          name: 'svg_labs'
        }
      ),
    ];
  }
}
