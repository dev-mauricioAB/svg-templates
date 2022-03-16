import { Type } from '@angular/core';

interface SvgProps {
  name: string
}

export class SvgIcon {
  constructor(public component: Type<any>, public props: SvgProps) { }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
