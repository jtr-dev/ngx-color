import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
export class PhotoshopPreviewsComponent {
    constructor() {
        this.currentColor = '';
        this.backgroundNew = '';
    }
    ngOnChanges() {
        this.backgroundNew = `rgb(${this.rgb.r},${this.rgb.g}, ${this.rgb.b})`;
    }
}
PhotoshopPreviewsComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-photoshop-previews',
                template: `
  <div>
    <div class="photoshop-label">new</div>
    <div class="photoshop-swatches">
      <div class="photoshop-new" [style.background]="backgroundNew"></div>
      <div class="photoshop-current" [style.background]="currentColor"></div>
    </div>
    <div class="photoshop-label">current</div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
  .photoshop-swatches {
    border: 1px solid #B3B3B3;
    border-bottom: 1px solid #F0F0F0;
    margin-bottom: 2px;
    margin-top: 1px;
  }
  .photoshop-new {
    height: 34px;
    box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;
  }
  .photoshop-current {
    height: 34px;
    box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000;
  }
  .photoshop-label {
    font-size: 14px;
    color: #000;
    text-align: center;
  }
  `]
            },] }
];
PhotoshopPreviewsComponent.propDecorators = {
    rgb: [{ type: Input }],
    currentColor: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9zaG9wLXByZXZpZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvcGhvdG9zaG9wLyIsInNvdXJjZXMiOlsicGhvdG9zaG9wLXByZXZpZXdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEdBRU4sTUFBTSxlQUFlLENBQUM7QUF5Q3ZCLE1BQU0sT0FBTywwQkFBMEI7SUF0Q3ZDO1FBd0NXLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQzNCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO0lBS3JCLENBQUM7SUFIQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDekUsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2dCQXdCRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSzt5QkF2QnhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRDthQUlGOzs7a0JBRUUsS0FBSzsyQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSR0IgfSBmcm9tICduZ3gtY29sb3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1waG90b3Nob3AtcHJldmlld3MnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtbGFiZWxcIj5uZXc8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLXN3YXRjaGVzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLW5ld1wiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImJhY2tncm91bmROZXdcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtY3VycmVudFwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImN1cnJlbnRDb2xvclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtbGFiZWxcIj5jdXJyZW50PC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gIC5waG90b3Nob3Atc3dhdGNoZXMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCM0IzQjM7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGMEYwRjA7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgfVxuICAucGhvdG9zaG9wLW5ldyB7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDAgIzAwMCwgaW5zZXQgLTFweCAwIDAgIzAwMCwgaW5zZXQgMCAxcHggMCAjMDAwO1xuICB9XG4gIC5waG90b3Nob3AtY3VycmVudCB7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDAgIzAwMCwgaW5zZXQgLTFweCAwIDAgIzAwMCwgaW5zZXQgMCAtMXB4IDAgIzAwMDtcbiAgfVxuICAucGhvdG9zaG9wLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUGhvdG9zaG9wUHJldmlld3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSByZ2IhOiBSR0I7XG4gIEBJbnB1dCgpIGN1cnJlbnRDb2xvciA9ICcnO1xuICBiYWNrZ3JvdW5kTmV3ID0gJyc7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kTmV3ID0gYHJnYigke3RoaXMucmdiLnJ9LCR7dGhpcy5yZ2IuZ30sICR7dGhpcy5yZ2IuYn0pYDtcbiAgfVxufVxuIl19