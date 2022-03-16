import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

import { ContainerRefDirective } from 'src/app/directives/container-ref.directive';
import { SvgIcon } from 'src/app/models/svg';
import { SvgGenerateIconsService } from 'src/app/services/svg-generate.service';

@Component({
  selector: 'app-svg',
  template: `<ng-template containerRef></ng-template>`,
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements AfterViewInit {

  @Input() svgIconName!: string; // array com componentes de icons, criados pelo service (adicionar tipo)

  @ViewChild(ContainerRefDirective, { static: true }) containerRef!: ContainerRefDirective;

  constructor(private svgService: SvgGenerateIconsService) { }

  ngAfterViewInit() {
    this.loadComponent();
  }

  loadComponent() {
    try {
      const { component } = this.svgService.getSvgIconsComponents()
        .find(({ props }) => props.name === this.svgIconName) as SvgIcon;

      const viewContainerRef = this.containerRef.viewContainerRef;
      viewContainerRef.clear();

      viewContainerRef.createComponent<SvgComponent>(component);
    } catch (error) {
      console.log(error);

    }
  }
}
