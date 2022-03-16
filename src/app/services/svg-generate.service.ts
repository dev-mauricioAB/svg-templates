import { Injectable } from '@angular/core';

import { SvgIcon } from './../models/svg';

import { KarmaComponent } from '../components/svg/karma/karma.component';

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
    ];
  }
}
