import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { ColorWrap, ShadeModule, toState } from 'ngx-color';
export class ShadeSliderComponent extends ColorWrap {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 316;
        /** Pixel value for picker height */
        this.height = 16;
        this.pointer = {
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            transform: 'translate(-9px, -2px)',
            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        };
    }
    ngOnChanges() {
        this.setState(toState(this.color, this.oldHue));
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
ShadeSliderComponent.decorators = [
    { type: Component, args: [{
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
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .shade-slider {
      position: relative;
    }
  `]
            },] }
];
ShadeSliderComponent.ctorParameters = () => [];
ShadeSliderComponent.propDecorators = {
    width: [{ type: Input }],
    height: [{ type: Input }],
    bnw: [{ type: Input }]
};
export class ColorShadeModule {
}
ColorShadeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ShadeSliderComponent],
                exports: [ShadeSliderComponent],
                imports: [CommonModule, ShadeModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvc2hhZGUvIiwic291cmNlcyI6WyJzaGFkZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQTBCNUQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFNBQVM7SUFjakQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQWRWLG1DQUFtQztRQUMxQixVQUFLLEdBQW9CLEdBQUcsQ0FBQztRQUN0QyxvQ0FBb0M7UUFDM0IsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFFdEMsWUFBTyxHQUE0QjtZQUNqQyxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLHVCQUF1QjtZQUNsQyxTQUFTLEVBQUUsaUNBQWlDO1NBQzdDLENBQUM7SUFJRixDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELGtCQUFrQixDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUE5Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtnQkFRRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSzt5QkFQeEI7Ozs7R0FJRDthQUlGOzs7O29CQUdFLEtBQUs7cUJBRUwsS0FBSztrQkFDTCxLQUFLOztBQXlCUixNQUFNLE9BQU8sZ0JBQWdCOzs7WUFMNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQzthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgTmdNb2R1bGUsXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvcldyYXAsIFNoYWRlTW9kdWxlLCB0b1N0YXRlIH0gZnJvbSAnbmd4LWNvbG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3Itc2hhZGUtcGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic2hhZGUtc2xpZGVyIHt7IGNsYXNzTmFtZSB8fCAnJyB9fVwiXG4gICAgICBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImhlaWdodFwiPlxuICAgICAgPGNvbG9yLXNoYWRlXG4gICAgICAgIFtoc2xdPVwiaHNsXCJcbiAgICAgICAgW3JnYl09XCJyZ2JcIlxuICAgICAgICBbcG9pbnRlcl09XCJwb2ludGVyXCJcbiAgICAgICAgW2Jud109XCJibndcIlxuICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlUGlja2VyQ2hhbmdlKCRldmVudClcIlxuICAgICAgPjwvY29sb3Itc2hhZGU+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAuc2hhZGUtc2xpZGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhZGVTbGlkZXJDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKiogUGl4ZWwgdmFsdWUgZm9yIHBpY2tlciB3aWR0aCAqL1xuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyID0gMzE2O1xuICAvKiogUGl4ZWwgdmFsdWUgZm9yIHBpY2tlciBoZWlnaHQgKi9cbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXIgPSAxNjtcbiAgQElucHV0KCkgYm53ITogYm9vbGVhbjtcbiAgcG9pbnRlcjoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICAgd2lkdGg6ICcxOHB4JyxcbiAgICBoZWlnaHQ6ICcxOHB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtOXB4LCAtMnB4KScsXG4gICAgYm94U2hhZG93OiAnMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjM3KScsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRvU3RhdGUodGhpcy5jb2xvciwgdGhpcy5vbGRIdWUpKTtcbiAgfVxuICBoYW5kbGVQaWNrZXJDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfSkge1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGRhdGEsICRldmVudCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2hhZGVTbGlkZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2hhZGVTbGlkZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTaGFkZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yU2hhZGVNb2R1bGUge31cbiJdfQ==