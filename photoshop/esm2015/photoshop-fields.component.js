import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { isValidHex } from 'ngx-color';
export class PhotoshopFieldsComponent {
    constructor() {
        this.onChange = new EventEmitter();
        this.RGBinput = {
            marginLeft: '35%',
            width: '40%',
            height: '22px',
            border: '1px solid rgb(136, 136, 136)',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px inset, rgb(236, 236, 236) 0px 1px 0px 0px',
            marginBottom: '2px',
            fontSize: '13px',
            paddingLeft: '3px',
            marginRight: '10px',
        };
        this.RGBwrap = {
            position: 'relative',
        };
        this.RGBlabel = {
            left: '0px',
            width: '34px',
            textTransform: 'uppercase',
            fontSize: '13px',
            height: '24px',
            lineHeight: '24px',
            position: 'absolute',
        };
        this.HEXinput = {
            marginLeft: '20%',
            width: '80%',
            height: '22px',
            border: '1px solid #888888',
            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
            marginBottom: '3px',
            fontSize: '13px',
            paddingLeft: '3px',
        };
        this.HEXwrap = {
            position: 'relative',
        };
        this.HEXlabel = {
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '14px',
            textTransform: 'uppercase',
            fontSize: '13px',
            height: '24px',
            lineHeight: '24px',
        };
    }
    round(v) {
        return Math.round(v);
    }
    handleValueChange({ data, $event }) {
        if (data['#']) {
            if (isValidHex(data['#'])) {
                this.onChange.emit({
                    data: {
                        hex: data['#'],
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else if (data.r || data.g || data.b) {
            this.onChange.emit({
                data: {
                    r: data.r || this.rgb.r,
                    g: data.g || this.rgb.g,
                    b: data.b || this.rgb.b,
                    source: 'rgb',
                },
                $event,
            });
        }
        else if (data.h || data.s || data.v) {
            this.onChange.emit({
                data: {
                    h: data.h || this.hsv.h,
                    s: data.s || this.hsv.s,
                    v: data.v || this.hsv.v,
                    source: 'hsv',
                },
                $event,
            });
        }
    }
}
PhotoshopFieldsComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-photoshop-fields',
                template: `
  <div class="photoshop-fields">
    <color-editable-input
      [value]="round(hsv.h)"
      label="h"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="round(hsv.s * 100)"
      label="s"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="round(hsv.v * 100)"
      label="v"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <div class="photoshop-divider"></div>
    <color-editable-input
      [value]="rgb.r"
      label="r"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="rgb.g"
      label="g"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="rgb.b"
      label="b"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <div class="photoshop-divider"></div>
    <color-editable-input
      [value]="hex.replace('#', '')"
      label="#"
      (onChange)="handleValueChange($event)"
      [style]="{input: HEXinput, wrap: HEXwrap, label: HEXlabel}"
    ></color-editable-input>
    <div class="photoshop-field-symbols">
      <div class="photoshop-symbol">°</div>
      <div class="photoshop-symbol">%</div>
      <div class="photoshop-symbol">%</div>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .photoshop-fields {
      padding-top: 5px;
      padding-bottom: 9px;
      width: 85px;
      position: relative;
    }
    .photoshop-field-symbols {
      position: absolute;
      top: 5px;
      right: -7px;
      font-size: 13px;
    }
    .photoshop-symbol {
      height: 24px;
      line-height: 24px;
      padding-bottom: 7px;
    }
    .photoshop-divider {
      height: 5px;
    }
  `]
            },] }
];
PhotoshopFieldsComponent.propDecorators = {
    rgb: [{ type: Input }],
    hsv: [{ type: Input }],
    hex: [{ type: Input }],
    onChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9zaG9wLWZpZWxkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3Bob3Rvc2hvcC8iLCJzb3VyY2VzIjpbInBob3Rvc2hvcC1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxXQUFXLENBQUM7QUFvRmpELE1BQU0sT0FBTyx3QkFBd0I7SUFsRnJDO1FBc0ZZLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdDLGFBQVEsR0FBMkI7WUFDakMsVUFBVSxFQUFFLEtBQUs7WUFDakIsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRSw4QkFBOEI7WUFDdEMsU0FBUyxFQUNQLDBFQUEwRTtZQUM1RSxZQUFZLEVBQUUsS0FBSztZQUNuQixRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsS0FBSztZQUNsQixXQUFXLEVBQUUsTUFBTTtTQUNwQixDQUFDO1FBQ0YsWUFBTyxHQUEyQjtZQUNoQyxRQUFRLEVBQUUsVUFBVTtTQUNyQixDQUFDO1FBQ0YsYUFBUSxHQUEyQjtZQUNqQyxJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxNQUFNO1lBQ2IsYUFBYSxFQUFFLFdBQVc7WUFDMUIsUUFBUSxFQUFFLE1BQU07WUFDaEIsTUFBTSxFQUFFLE1BQU07WUFDZCxVQUFVLEVBQUUsTUFBTTtZQUNsQixRQUFRLEVBQUUsVUFBVTtTQUNyQixDQUFDO1FBQ0YsYUFBUSxHQUEyQjtZQUNqQyxVQUFVLEVBQUUsS0FBSztZQUNqQixLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLG1CQUFtQjtZQUMzQixTQUFTLEVBQUUsbURBQW1EO1lBQzlELFlBQVksRUFBRSxLQUFLO1lBQ25CLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUM7UUFDRixZQUFPLEdBQTJCO1lBQ2hDLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7UUFDRixhQUFRLEdBQTJCO1lBQ2pDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLGFBQWEsRUFBRSxXQUFXO1lBQzFCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztJQXNDSixDQUFDO0lBcENDLEtBQUssQ0FBQyxDQUFDO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDaEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDYixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLElBQUksRUFBRTt3QkFDSixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDZCxNQUFNLEVBQUUsS0FBSztxQkFDZDtvQkFDRCxNQUFNO2lCQUNQLENBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNqQixJQUFJLEVBQUU7b0JBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsTUFBTSxFQUFFLEtBQUs7aUJBQ2Q7Z0JBQ0QsTUFBTTthQUNQLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxFQUFFO29CQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sRUFBRSxLQUFLO2lCQUNkO2dCQUNELE1BQU07YUFDUCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQTFLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0RUO2dCQXlCRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSzt5QkF4QnhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkQ7YUFJRjs7O2tCQUVFLEtBQUs7a0JBQ0wsS0FBSztrQkFDTCxLQUFLO3VCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc1ZhbGlkSGV4LCBIU1YsIFJHQiB9IGZyb20gJ25neC1jb2xvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbG9yLXBob3Rvc2hvcC1maWVsZHMnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLWZpZWxkc1wiPlxuICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxuICAgICAgW3ZhbHVlXT1cInJvdW5kKGhzdi5oKVwiXG4gICAgICBsYWJlbD1cImhcIlxuICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3N0eWxlXT1cIntpbnB1dDogUkdCaW5wdXQsIHdyYXA6IFJHQndyYXAsIGxhYmVsOiBSR0JsYWJlbH1cIlxuICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxuICAgICAgW3ZhbHVlXT1cInJvdW5kKGhzdi5zICogMTAwKVwiXG4gICAgICBsYWJlbD1cInNcIlxuICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3N0eWxlXT1cIntpbnB1dDogUkdCaW5wdXQsIHdyYXA6IFJHQndyYXAsIGxhYmVsOiBSR0JsYWJlbH1cIlxuICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxuICAgICAgW3ZhbHVlXT1cInJvdW5kKGhzdi52ICogMTAwKVwiXG4gICAgICBsYWJlbD1cInZcIlxuICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3N0eWxlXT1cIntpbnB1dDogUkdCaW5wdXQsIHdyYXA6IFJHQndyYXAsIGxhYmVsOiBSR0JsYWJlbH1cIlxuICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtZGl2aWRlclwiPjwvZGl2PlxuICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxuICAgICAgW3ZhbHVlXT1cInJnYi5yXCJcbiAgICAgIGxhYmVsPVwiclwiXG4gICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbc3R5bGVdPVwie2lucHV0OiBSR0JpbnB1dCwgd3JhcDogUkdCd3JhcCwgbGFiZWw6IFJHQmxhYmVsfVwiXG4gICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XG4gICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XG4gICAgICBbdmFsdWVdPVwicmdiLmdcIlxuICAgICAgbGFiZWw9XCJnXCJcbiAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFtzdHlsZV09XCJ7aW5wdXQ6IFJHQmlucHV0LCB3cmFwOiBSR0J3cmFwLCBsYWJlbDogUkdCbGFiZWx9XCJcbiAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cbiAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcbiAgICAgIFt2YWx1ZV09XCJyZ2IuYlwiXG4gICAgICBsYWJlbD1cImJcIlxuICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3N0eWxlXT1cIntpbnB1dDogUkdCaW5wdXQsIHdyYXA6IFJHQndyYXAsIGxhYmVsOiBSR0JsYWJlbH1cIlxuICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxuICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtZGl2aWRlclwiPjwvZGl2PlxuICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxuICAgICAgW3ZhbHVlXT1cImhleC5yZXBsYWNlKCcjJywgJycpXCJcbiAgICAgIGxhYmVsPVwiI1wiXG4gICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbc3R5bGVdPVwie2lucHV0OiBIRVhpbnB1dCwgd3JhcDogSEVYd3JhcCwgbGFiZWw6IEhFWGxhYmVsfVwiXG4gICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XG4gICAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC1maWVsZC1zeW1ib2xzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLXN5bWJvbFwiPsKwPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLXN5bWJvbFwiPiU8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3Atc3ltYm9sXCI+JTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgIC5waG90b3Nob3AtZmllbGRzIHtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICAgICAgd2lkdGg6IDg1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5waG90b3Nob3AtZmllbGQtc3ltYm9scyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIHJpZ2h0OiAtN3B4O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgICAucGhvdG9zaG9wLXN5bWJvbCB7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgfVxuICAgIC5waG90b3Nob3AtZGl2aWRlciB7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICB9XG4gIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUGhvdG9zaG9wRmllbGRzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgcmdiITogUkdCO1xuICBASW5wdXQoKSBoc3YhOiBIU1Y7XG4gIEBJbnB1dCgpIGhleCE6IHN0cmluZztcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIFJHQmlucHV0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIG1hcmdpbkxlZnQ6ICczNSUnLFxuICAgIHdpZHRoOiAnNDAlJyxcbiAgICBoZWlnaHQ6ICcyMnB4JyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgcmdiKDEzNiwgMTM2LCAxMzYpJyxcbiAgICBib3hTaGFkb3c6XG4gICAgICAncmdiYSgwLCAwLCAwLCAwLjEpIDBweCAxcHggMXB4IGluc2V0LCByZ2IoMjM2LCAyMzYsIDIzNikgMHB4IDFweCAwcHggMHB4JyxcbiAgICBtYXJnaW5Cb3R0b206ICcycHgnLFxuICAgIGZvbnRTaXplOiAnMTNweCcsXG4gICAgcGFkZGluZ0xlZnQ6ICczcHgnLFxuICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXG4gIH07XG4gIFJHQndyYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH07XG4gIFJHQmxhYmVsOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIGxlZnQ6ICcwcHgnLFxuICAgIHdpZHRoOiAnMzRweCcsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICBoZWlnaHQ6ICcyNHB4JyxcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIH07XG4gIEhFWGlucHV0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIG1hcmdpbkxlZnQ6ICcyMCUnLFxuICAgIHdpZHRoOiAnODAlJyxcbiAgICBoZWlnaHQ6ICcyMnB4JyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzg4ODg4OCcsXG4gICAgYm94U2hhZG93OiAnaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjEpLCAwIDFweCAwIDAgI0VDRUNFQycsXG4gICAgbWFyZ2luQm90dG9tOiAnM3B4JyxcbiAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgIHBhZGRpbmdMZWZ0OiAnM3B4JyxcbiAgfTtcbiAgSEVYd3JhcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfTtcbiAgSEVYbGFiZWw6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMHB4JyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICB3aWR0aDogJzE0cHgnLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGZvbnRTaXplOiAnMTNweCcsXG4gICAgaGVpZ2h0OiAnMjRweCcsXG4gICAgbGluZUhlaWdodDogJzI0cHgnLFxuICB9O1xuXG4gIHJvdW5kKHYpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2KTtcbiAgfVxuICBoYW5kbGVWYWx1ZUNoYW5nZSh7IGRhdGEsICRldmVudCB9KSB7XG4gICAgaWYgKGRhdGFbJyMnXSkge1xuICAgICAgaWYgKGlzVmFsaWRIZXgoZGF0YVsnIyddKSkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGhleDogZGF0YVsnIyddLFxuICAgICAgICAgICAgc291cmNlOiAnaGV4JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgICRldmVudCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkYXRhLnIgfHwgZGF0YS5nIHx8IGRhdGEuYikge1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHI6IGRhdGEuciB8fCB0aGlzLnJnYi5yLFxuICAgICAgICAgIGc6IGRhdGEuZyB8fCB0aGlzLnJnYi5nLFxuICAgICAgICAgIGI6IGRhdGEuYiB8fCB0aGlzLnJnYi5iLFxuICAgICAgICAgIHNvdXJjZTogJ3JnYicsXG4gICAgICAgIH0sXG4gICAgICAgICRldmVudCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5oIHx8IGRhdGEucyB8fCBkYXRhLnYpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBoOiBkYXRhLmggfHwgdGhpcy5oc3YuaCxcbiAgICAgICAgICBzOiBkYXRhLnMgfHwgdGhpcy5oc3YucyxcbiAgICAgICAgICB2OiBkYXRhLnYgfHwgdGhpcy5oc3YudixcbiAgICAgICAgICBzb3VyY2U6ICdoc3YnLFxuICAgICAgICB9LFxuICAgICAgICAkZXZlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==