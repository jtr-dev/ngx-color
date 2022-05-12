import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CoordinatesModule } from './coordinates.directive';
import { TinyColor } from '@ctrl/tinycolor';
export class ShadeComponent {
    constructor() {
        this.onChange = new EventEmitter();
    }
    ngOnChanges() {
        const colorGradient = `linear-gradient(to right,
      hsl(${this.hsl.h}, 90%, 55%),
      #000)`;
        const whiteToBlackGradient = `linear-gradient(to right, #fff, #000)`;
        const bgGradient = this.bnw ? whiteToBlackGradient : colorGradient;
        this.gradient = {
            background: bgGradient
        };
        const hsv = new TinyColor(this.hsl).toHsv();
        this.pointerLeft = 100 - (hsv.v * 100);
    }
    handleChange({ left, containerWidth, $event }) {
        let data;
        let v;
        if (left < 0) {
            v = 0;
        }
        else if (left > containerWidth) {
            v = 1;
        }
        else {
            v = Math.round((left * 100) / containerWidth) / 100;
        }
        const hsv = new TinyColor(this.hsl).toHsv();
        if (hsv.v !== v) {
            data = {
                h: this.hsl.h,
                s: this.bnw ? 0 : 1,
                v: 1 - v,
                l: this.hsl.l,
                a: this.hsl.a,
                source: 'rgb',
            };
        }
        if (!data) {
            return;
        }
        this.onChange.emit({ data, $event });
    }
}
ShadeComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-shade',
                template: `
    <div class="shade" [style.border-radius]="radius">
      <div
        class="shade-gradient"
        [ngStyle]="gradient"
        [style.box-shadow]="shadow"
        [style.border-radius]="radius"
      ></div>
      <div
        ngx-color-coordinates
        (coordinatesChange)="handleChange($event)"
        class="shade-container"
      >
        <div
          class="shade-pointer"
          [style.left.%]="pointerLeft"
          [style.top.%]="pointerTop"
        >
          <div class="shade-slider" [ngStyle]="pointer"></div>
        </div>
      </div>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .shade {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .shade-gradient {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .shade-container {
      position: relative;
      height: 100%;
      margin: 0 3px;
    }
    .shade-pointer {
      position: absolute;
    }
    .shade-slider {
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      margin-top: 1px;
      transform: translateX(-2px);
    },
  `]
            },] }
];
ShadeComponent.propDecorators = {
    hsl: [{ type: Input }],
    rgb: [{ type: Input }],
    pointer: [{ type: Input }],
    shadow: [{ type: Input }],
    radius: [{ type: Input }],
    bnw: [{ type: Input }],
    onChange: [{ type: Output }]
};
export class ShadeModule {
}
ShadeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ShadeComponent],
                exports: [ShadeComponent],
                imports: [CommonModule, CoordinatesModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy9saWIvY29tbW9uLyIsInNvdXJjZXMiOlsic2hhZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFFUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBa0U1QyxNQUFNLE9BQU8sY0FBYztJQS9EM0I7UUFzRVksYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFnRC9DLENBQUM7SUEzQ0MsV0FBVztRQUNULE1BQU0sYUFBYSxHQUFHO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNULE1BQU0sb0JBQW9CLEdBQUcsdUNBQXVDLENBQUM7UUFDckUsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUVuRSxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsVUFBVSxFQUFFLFVBQVU7U0FDdkIsQ0FBQztRQUNGLE1BQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFO1FBQzNDLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBSSxDQUFTLENBQUM7UUFDZCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1A7YUFBTSxJQUFJLElBQUksR0FBRyxjQUFjLEVBQUU7WUFDaEMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNQO2FBQU07WUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDckQ7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksR0FBRztnQkFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDUixDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTSxFQUFFLEtBQUs7YUFDZCxDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUFySEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQlQ7Z0JBb0NELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQW5DeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0NEO2FBSUY7OztrQkFFRSxLQUFLO2tCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7a0JBQ0wsS0FBSzt1QkFDTCxNQUFNOztBQXVEVCxNQUFNLE9BQU8sV0FBVzs7O1lBTHZCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDekIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nTW9kdWxlLFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb29yZGluYXRlc01vZHVsZSB9IGZyb20gJy4vY29vcmRpbmF0ZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEhTTEEsIFJHQkEgfSBmcm9tICcuL2hlbHBlcnMvY29sb3IuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBUaW55Q29sb3IgfSBmcm9tICdAY3RybC90aW55Y29sb3InO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLXNoYWRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwic2hhZGVcIiBbc3R5bGUuYm9yZGVyLXJhZGl1c109XCJyYWRpdXNcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJzaGFkZS1ncmFkaWVudFwiXG4gICAgICAgIFtuZ1N0eWxlXT1cImdyYWRpZW50XCJcbiAgICAgICAgW3N0eWxlLmJveC1zaGFkb3ddPVwic2hhZG93XCJcbiAgICAgICAgW3N0eWxlLmJvcmRlci1yYWRpdXNdPVwicmFkaXVzXCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgbmd4LWNvbG9yLWNvb3JkaW5hdGVzXG4gICAgICAgIChjb29yZGluYXRlc0NoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIGNsYXNzPVwic2hhZGUtY29udGFpbmVyXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwic2hhZGUtcG9pbnRlclwiXG4gICAgICAgICAgW3N0eWxlLmxlZnQuJV09XCJwb2ludGVyTGVmdFwiXG4gICAgICAgICAgW3N0eWxlLnRvcC4lXT1cInBvaW50ZXJUb3BcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRlLXNsaWRlclwiIFtuZ1N0eWxlXT1cInBvaW50ZXJcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5zaGFkZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5zaGFkZS1ncmFkaWVudCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5zaGFkZS1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWFyZ2luOiAwIDNweDtcbiAgICB9XG4gICAgLnNoYWRlLXBvaW50ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAuc2hhZGUtc2xpZGVyIHtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAuNik7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xuICAgIH0sXG4gIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBoc2whOiBIU0xBO1xuICBASW5wdXQoKSByZ2IhOiBSR0JBO1xuICBASW5wdXQoKSBwb2ludGVyITogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgQElucHV0KCkgc2hhZG93ITogc3RyaW5nO1xuICBASW5wdXQoKSByYWRpdXMhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJudyE6IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBncmFkaWVudCE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIHBvaW50ZXJMZWZ0ITogbnVtYmVyO1xuICBwb2ludGVyVG9wPzogbnVtYmVyO1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGNvbnN0IGNvbG9yR3JhZGllbnQgPSBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LFxuICAgICAgaHNsKCR7dGhpcy5oc2wuaH0sIDkwJSwgNTUlKSxcbiAgICAgICMwMDApYDtcbiAgICBjb25zdCB3aGl0ZVRvQmxhY2tHcmFkaWVudCA9IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsICMwMDApYDtcbiAgICBjb25zdCBiZ0dyYWRpZW50ID0gdGhpcy5ibncgPyB3aGl0ZVRvQmxhY2tHcmFkaWVudCA6IGNvbG9yR3JhZGllbnQ7XG5cbiAgICB0aGlzLmdyYWRpZW50ID0ge1xuICAgICAgYmFja2dyb3VuZDogYmdHcmFkaWVudFxuICAgIH07XG4gICAgY29uc3QgaHN2ID0gbmV3IFRpbnlDb2xvcih0aGlzLmhzbCkudG9Ic3YoKTtcbiAgICB0aGlzLnBvaW50ZXJMZWZ0ID0gMTAwIC0gKGhzdi52ICogMTAwKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh7IGxlZnQsIGNvbnRhaW5lcldpZHRoLCAkZXZlbnQgfSk6IHZvaWQge1xuICAgIGxldCBkYXRhO1xuICAgIGxldCB2OiBudW1iZXI7XG4gICAgaWYgKGxlZnQgPCAwKSB7XG4gICAgICB2ID0gMDtcbiAgICB9IGVsc2UgaWYgKGxlZnQgPiBjb250YWluZXJXaWR0aCkge1xuICAgICAgdiA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHYgPSBNYXRoLnJvdW5kKChsZWZ0ICogMTAwKSAvIGNvbnRhaW5lcldpZHRoKSAvIDEwMDtcbiAgICB9XG5cbiAgICBjb25zdCBoc3YgPSBuZXcgVGlueUNvbG9yKHRoaXMuaHNsKS50b0hzdigpO1xuICAgIGlmIChoc3YudiAhPT0gdikge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgaDogdGhpcy5oc2wuaCxcbiAgICAgICAgczogdGhpcy5ibncgPyAwIDogMSxcbiAgICAgICAgdjogMSAtIHYsXG4gICAgICAgIGw6IHRoaXMuaHNsLmwsXG4gICAgICAgIGE6IHRoaXMuaHNsLmEsXG4gICAgICAgIHNvdXJjZTogJ3JnYicsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IGRhdGEsICRldmVudCB9KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTaGFkZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTaGFkZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENvb3JkaW5hdGVzTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU2hhZGVNb2R1bGUgeyB9XG4iXX0=