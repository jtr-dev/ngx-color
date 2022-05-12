import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { ColorWrap, HueModule, SwatchModule } from 'ngx-color';
import { SliderSwatchComponent } from './slider-swatch.component';
import { SliderSwatchesComponent } from './slider-swatches.component';
export class SliderComponent extends ColorWrap {
    constructor() {
        super();
        this.pointer = {
            width: '14px',
            height: '14px',
            borderRadius: '6px',
            transform: 'translate(-7px, -2px)',
            backgroundColor: 'rgb(248, 248, 248)',
            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        };
        this.radius = 2;
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-slider',
                template: `
  <div class="slider-picker {{ className }}">
    <div class="slider-hue">
      <color-hue
        [hsl]="hsl" [radius]="radius" [pointer]="pointer"
        (onChange)="handlePickerChange($event)"
      ></color-hue>
    </div>
    <div class="slider-swatches">
      <color-slider-swatches [hsl]="hsl"
        (onClick)="handlePickerChange($event)"
      ></color-slider-swatches>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .slider-hue {
      height: 12px;
      position: relative;
    }
  `]
            },] }
];
SliderComponent.ctorParameters = () => [];
SliderComponent.propDecorators = {
    pointer: [{ type: Input }],
    radius: [{ type: Input }]
};
export class ColorSliderModule {
}
ColorSliderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SliderComponent,
                    SliderSwatchComponent,
                    SliderSwatchesComponent,
                ],
                exports: [SliderComponent, SliderSwatchComponent, SliderSwatchesComponent],
                imports: [CommonModule, HueModule, SwatchModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvc2xpZGVyLyIsInNvdXJjZXMiOlsic2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUE4QnRFLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7SUFZNUM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQVhWLFlBQU8sR0FBMkI7WUFDaEMsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLFlBQVksRUFBRSxLQUFLO1lBQ25CLFNBQVMsRUFBRSx1QkFBdUI7WUFDbEMsZUFBZSxFQUFFLG9CQUFvQjtZQUNyQyxTQUFTLEVBQUUsaUNBQWlDO1NBQzdDLENBQUM7UUFDTyxXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBSXBCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUO2dCQVNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQVJ4Qjs7Ozs7R0FLRDthQUlGOzs7O3NCQUVFLEtBQUs7cUJBU0wsS0FBSzs7QUFvQlIsTUFBTSxPQUFPLGlCQUFpQjs7O1lBVDdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZUFBZTtvQkFDZixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixDQUFDO2dCQUMxRSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgTmdNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2xvcldyYXAsIEh1ZU1vZHVsZSwgU3dhdGNoTW9kdWxlIH0gZnJvbSAnbmd4LWNvbG9yJztcbmltcG9ydCB7IFNsaWRlclN3YXRjaENvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVyLXN3YXRjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyU3dhdGNoZXNDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci1zd2F0Y2hlcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1zbGlkZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwic2xpZGVyLXBpY2tlciB7eyBjbGFzc05hbWUgfX1cIj5cbiAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLWh1ZVwiPlxuICAgICAgPGNvbG9yLWh1ZVxuICAgICAgICBbaHNsXT1cImhzbFwiIFtyYWRpdXNdPVwicmFkaXVzXCIgW3BvaW50ZXJdPVwicG9pbnRlclwiXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVQaWNrZXJDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICA+PC9jb2xvci1odWU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNsaWRlci1zd2F0Y2hlc1wiPlxuICAgICAgPGNvbG9yLXNsaWRlci1zd2F0Y2hlcyBbaHNsXT1cImhzbFwiXG4gICAgICAgIChvbkNsaWNrKT1cImhhbmRsZVBpY2tlckNoYW5nZSgkZXZlbnQpXCJcbiAgICAgID48L2NvbG9yLXNsaWRlci1zd2F0Y2hlcz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAuc2xpZGVyLWh1ZSB7XG4gICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBleHRlbmRzIENvbG9yV3JhcCB7XG4gIEBJbnB1dCgpXG4gIHBvaW50ZXI6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgd2lkdGg6ICcxNHB4JyxcbiAgICBoZWlnaHQ6ICcxNHB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtN3B4LCAtMnB4KScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0OCwgMjQ4LCAyNDgpJyxcbiAgICBib3hTaGFkb3c6ICcwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMzcpJyxcbiAgfTtcbiAgQElucHV0KCkgcmFkaXVzID0gMjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgaGFuZGxlUGlja2VyQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShkYXRhLCAkZXZlbnQpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNsaWRlckNvbXBvbmVudCxcbiAgICBTbGlkZXJTd2F0Y2hDb21wb25lbnQsXG4gICAgU2xpZGVyU3dhdGNoZXNDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtTbGlkZXJDb21wb25lbnQsIFNsaWRlclN3YXRjaENvbXBvbmVudCwgU2xpZGVyU3dhdGNoZXNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdWVNb2R1bGUsIFN3YXRjaE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yU2xpZGVyTW9kdWxlIHt9XG4iXX0=