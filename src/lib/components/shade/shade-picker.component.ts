import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  OnChanges,
} from '@angular/core';
import { ColorWrap, ShadeModule, toState } from 'ngx-color';

@Component({
  selector: 'color-shade-picker',
  template: `
    <div class="shade-slider {{ className || '' }}"
      [style.width.px]="width" [style.height.px]="height">
      <color-shade
        [hsl]="hsl"
        [rgb]="rgb"
        [pointer]="pointer"
        [bnw]="bnw"
        (onChange)="handlePickerChange($event)"
      ></color-shade>
    </div>
  `,
  styles: [
    `
    .shade-slider {
      position: relative;
    }
  `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
})
export class ShadeSliderComponent extends ColorWrap implements OnChanges {
  /** Pixel value for picker width */
  @Input() width: string | number = 316;
  /** Pixel value for picker height */
  @Input() height: string | number = 16;
  @Input() bnw!: boolean;
  pointer: {[key: string]: string} = {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    transform: 'translate(-9px, -2px)',
    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
  };

  constructor() {
    super();
  }
  ngOnChanges() {
    this.setState(toState(this.color, this.oldHue));
  }
  handlePickerChange({ data, $event }) {
    this.handleChange(data, $event);
  }
}

@NgModule({
  declarations: [ShadeSliderComponent],
  exports: [ShadeSliderComponent],
  imports: [CommonModule, ShadeModule],
})
export class ColorShadeModule {}
