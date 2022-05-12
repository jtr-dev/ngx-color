import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { fromEvent } from 'rxjs';
export class EditableInputComponent {
    constructor() {
        this.placeholder = '';
        this.onChange = new EventEmitter();
        this.focus = false;
    }
    ngOnInit() {
        this.wrapStyle = this.style && this.style.wrap ? this.style.wrap : {};
        this.inputStyle = this.style && this.style.input ? this.style.input : {};
        this.labelStyle = this.style && this.style.label ? this.style.label : {};
        if (this.dragLabel) {
            this.labelStyle.cursor = 'ew-resize';
        }
    }
    handleFocus($event) {
        this.focus = true;
    }
    handleFocusOut($event) {
        this.focus = false;
        this.currentValue = this.blurValue;
    }
    handleKeydown($event) {
        // In case `e.target.value` is a percentage remove the `%` character
        // and update accordingly with a percentage
        // https://github.com/casesandberg/react-color/issues/383
        const stringValue = String($event.target.value);
        const isPercentage = stringValue.indexOf('%') > -1;
        const num = Number(stringValue.replace(/%/g, ''));
        if (isNaN(num)) {
            return;
        }
        const amount = this.arrowOffset || 1;
        // Up
        if ($event.keyCode === 38) {
            if (this.label) {
                this.onChange.emit({
                    data: { [this.label]: num + amount },
                    $event,
                });
            }
            else {
                this.onChange.emit({ data: num + amount, $event });
            }
            if (isPercentage) {
                this.currentValue = `${num + amount}%`;
            }
            else {
                this.currentValue = num + amount;
            }
        }
        // Down
        if ($event.keyCode === 40) {
            if (this.label) {
                this.onChange.emit({
                    data: { [this.label]: num - amount },
                    $event,
                });
            }
            else {
                this.onChange.emit({ data: num - amount, $event });
            }
            if (isPercentage) {
                this.currentValue = `${num - amount}%`;
            }
            else {
                this.currentValue = num - amount;
            }
        }
    }
    handleKeyup($event) {
        if ($event.keyCode === 40 || $event.keyCode === 38) {
            return;
        }
        if (`${this.currentValue}` === $event.target.value) {
            return;
        }
        if (this.label) {
            this.onChange.emit({
                data: { [this.label]: $event.target.value },
                $event,
            });
        }
        else {
            this.onChange.emit({ data: $event.target.value, $event });
        }
    }
    ngOnChanges() {
        if (!this.focus) {
            this.currentValue = String(this.value).toUpperCase();
            this.blurValue = String(this.value).toUpperCase();
        }
        else {
            this.blurValue = String(this.value).toUpperCase();
        }
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    subscribe() {
        this.mousemove = fromEvent(document, 'mousemove').subscribe((ev) => this.handleDrag(ev));
        this.mouseup = fromEvent(document, 'mouseup').subscribe(() => this.unsubscribe());
    }
    unsubscribe() {
        if (this.mousemove) {
            this.mousemove.unsubscribe();
        }
        if (this.mouseup) {
            this.mouseup.unsubscribe();
        }
    }
    handleMousedown($event) {
        if (this.dragLabel) {
            $event.preventDefault();
            this.handleDrag($event);
            this.subscribe();
        }
    }
    handleDrag($event) {
        if (this.dragLabel) {
            const newValue = Math.round(this.value + $event.movementX);
            if (newValue >= 0 && newValue <= this.dragMax) {
                this.onChange.emit({ data: { [this.label]: newValue }, $event });
            }
        }
    }
}
EditableInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-editable-input',
                template: `
    <div class="wrap" [ngStyle]="wrapStyle">
      <input
        [ngStyle]="inputStyle"
        spellCheck="false"
        [value]="currentValue"
        [placeholder]="placeholder"
        (keydown)="handleKeydown($event)"
        (keyup)="handleKeyup($event)"
        (focus)="handleFocus($event)"
        (focusout)="handleFocusOut($event)"
      />
      <span *ngIf="label" [ngStyle]="labelStyle" (mousedown)="handleMousedown($event)">
        {{ label }}
      </span>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
        display: flex;
      }
      .wrap {
        position: relative;
      }
    `]
            },] }
];
EditableInputComponent.propDecorators = {
    style: [{ type: Input }],
    label: [{ type: Input }],
    value: [{ type: Input }],
    arrowOffset: [{ type: Input }],
    dragLabel: [{ type: Input }],
    dragMax: [{ type: Input }],
    placeholder: [{ type: Input }],
    onChange: [{ type: Output }]
};
export class EditableInputModule {
}
EditableInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EditableInputComponent],
                exports: [EditableInputComponent],
                imports: [CommonModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy9saWIvY29tbW9uLyIsInNvdXJjZXMiOlsiZWRpdGFibGUtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFJUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFpQy9DLE1BQU0sT0FBTyxzQkFBc0I7SUEvQm5DO1FBMENXLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBTXhDLFVBQUssR0FBRyxLQUFLLENBQUM7SUEwSGhCLENBQUM7SUF0SEMsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pFLElBQUksSUFBSSxD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QkFDTCxNQUFNOztBQXVJVCxNQUFNLE9BQU8sbUJBQW1COzs7WUFML0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nTW9kdWxlLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xvci1lZGl0YWJsZS1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIndyYXBcIiBbbmdTdHlsZV09XCJ3cmFwU3R5bGVcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBbbmdTdHlsZV09XCJpbnB1dFN0eWxlXCJcbiAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgW3ZhbHVlXT1cImN1cnJlbnRWYWx1ZVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgIChrZXlkb3duKT1cImhhbmRsZUtleWRvd24oJGV2ZW50KVwiXG4gICAgICAgIChrZXl1cCk9XCJoYW5kbGVLZXl1cCgkZXZlbnQpXCJcbiAgICAgICAgKGZvY3VzKT1cImhhbmRsZUZvY3VzKCRldmVudClcIlxuICAgICAgICAoZm9jdXNvdXQpPVwiaGFuZGxlRm9jdXNPdXQoJGV2ZW50KVwiXG4gICAgICAvPlxuICAgICAgPHNwYW4gKm5nSWY9XCJsYWJlbFwiIFtuZ1N0eWxlXT1cImxhYmVsU3R5bGVcIiAobW91c2Vkb3duKT1cImhhbmRsZU1vdXNlZG93bigkZXZlbnQpXCI+XG4gICAgICAgIHt7IGxhYmVsIH19XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC53cmFwIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0YWJsZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHN0eWxlIToge1xuICAgIHdyYXA/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICAgIGlucHV0PzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgICBsYWJlbD86IFJlY29yZDxzdHJpbmcsIGFueT47XG4gIH07XG4gIEBJbnB1dCgpIGxhYmVsITogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZSE6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgYXJyb3dPZmZzZXQhOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRyYWdMYWJlbCE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRyYWdNYXghOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY3VycmVudFZhbHVlITogc3RyaW5nIHwgbnVtYmVyO1xuICBibHVyVmFsdWUhOiBzdHJpbmc7XG4gIHdyYXBTdHlsZSE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIGlucHV0U3R5bGUhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBsYWJlbFN0eWxlITogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgZm9jdXMgPSBmYWxzZTtcbiAgbW91c2Vtb3ZlITogU3Vic2NyaXB0aW9uO1xuICBtb3VzZXVwITogU3Vic2NyaXB0aW9uO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMud3JhcFN0eWxlID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLndyYXAgPyB0aGlzLnN0eWxlLndyYXAgOiB7fTtcbiAgICB0aGlzLmlucHV0U3R5bGUgPSB0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUuaW5wdXQgPyB0aGlzLnN0eWxlLmlucHV0IDoge307XG4gICAgdGhpcy5sYWJlbFN0eWxlID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLmxhYmVsID8gdGhpcy5zdHlsZS5sYWJlbCA6IHt9O1xuICAgIGlmICh0aGlzLmRyYWdMYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbFN0eWxlLmN1cnNvciA9ICdldy1yZXNpemUnO1xuICAgIH1cbiAgfVxuICBoYW5kbGVGb2N1cygkZXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcbiAgfVxuICBoYW5kbGVGb2N1c091dCgkZXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmJsdXJWYWx1ZTtcbiAgfVxuICBoYW5kbGVLZXlkb3duKCRldmVudCkge1xuICAgIC8vIEluIGNhc2UgYGUudGFyZ2V0LnZhbHVlYCBpcyBhIHBlcmNlbnRhZ2UgcmVtb3ZlIHRoZSBgJWAgY2hhcmFjdGVyXG4gICAgLy8gYW5kIHVwZGF0ZSBhY2NvcmRpbmdseSB3aXRoIGEgcGVyY2VudGFnZVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXNlc2FuZGJlcmcvcmVhY3QtY29sb3IvaXNzdWVzLzM4M1xuICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gU3RyaW5nKCRldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IGlzUGVyY2VudGFnZSA9IHN0cmluZ1ZhbHVlLmluZGV4T2YoJyUnKSA+IC0xO1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihzdHJpbmdWYWx1ZS5yZXBsYWNlKC8lL2csICcnKSk7XG4gICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYW1vdW50ID0gdGhpcy5hcnJvd09mZnNldCB8fCAxO1xuXG4gICAgLy8gVXBcbiAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT09IDM4KSB7XG4gICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIGRhdGE6IHsgW3RoaXMubGFiZWxdOiBudW0gKyBhbW91bnQgfSxcbiAgICAgICAgICAkZXZlbnQsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgZGF0YTogbnVtICsgYW1vdW50LCAkZXZlbnQgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1BlcmNlbnRhZ2UpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBgJHtudW0gKyBhbW91bnR9JWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IG51bSArIGFtb3VudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEb3duXG4gICAgaWYgKCRldmVudC5rZXlDb2RlID09PSA0MCkge1xuICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICBkYXRhOiB7IFt0aGlzLmxhYmVsXTogbnVtIC0gYW1vdW50IH0sXG4gICAgICAgICAgJGV2ZW50LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IGRhdGE6IG51bSAtIGFtb3VudCwgJGV2ZW50IH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNQZXJjZW50YWdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gYCR7bnVtIC0gYW1vdW50fSVgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBudW0gLSBhbW91bnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGhhbmRsZUtleXVwKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQua2V5Q29kZSA9PT0gNDAgfHwgJGV2ZW50LmtleUNvZGUgPT09IDM4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChgJHt0aGlzLmN1cnJlbnRWYWx1ZX1gID09PSAkZXZlbnQudGFyZ2V0LnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XG4gICAgICAgIGRhdGE6IHsgW3RoaXMubGFiZWxdOiAkZXZlbnQudGFyZ2V0LnZhbHVlIH0sXG4gICAgICAgICRldmVudCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhOiAkZXZlbnQudGFyZ2V0LnZhbHVlLCAkZXZlbnQgfSk7XG4gICAgfVxuICB9XG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5mb2N1cykge1xuICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBTdHJpbmcodGhpcy52YWx1ZSkudG9VcHBlckNhc2UoKTtcbiAgICAgIHRoaXMuYmx1clZhbHVlID0gU3RyaW5nKHRoaXMudmFsdWUpLnRvVXBwZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmx1clZhbHVlID0gU3RyaW5nKHRoaXMudmFsdWUpLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuICBzdWJzY3JpYmUoKSB7XG4gICAgdGhpcy5tb3VzZW1vdmUgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZW1vdmUnKS5zdWJzY3JpYmUoKGV2OiBFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnKGV2KSk7XG4gICAgdGhpcy5tb3VzZXVwID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCcpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVuc3Vic2NyaWJlKCkpO1xuICB9XG4gIHVuc3Vic2NyaWJlKCkge1xuICAgIGlmICh0aGlzLm1vdXNlbW92ZSkge1xuICAgICAgdGhpcy5tb3VzZW1vdmUudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubW91c2V1cCkge1xuICAgICAgdGhpcy5tb3VzZXVwLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIGhhbmRsZU1vdXNlZG93bigkZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZHJhZ0xhYmVsKSB7XG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuaGFuZGxlRHJhZygkZXZlbnQpO1xuICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlRHJhZygkZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kcmFnTGFiZWwpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gTWF0aC5yb3VuZCh0aGlzLnZhbHVlICsgJGV2ZW50Lm1vdmVtZW50WCk7XG4gICAgICBpZiAobmV3VmFsdWUgPj0gMCAmJiBuZXdWYWx1ZSA8PSB0aGlzLmRyYWdNYXgpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgZGF0YTogeyBbdGhpcy5sYWJlbF06IG5ld1ZhbHVlIH0sICRldmVudCB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRWRpdGFibGVJbnB1dENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtFZGl0YWJsZUlucHV0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRhYmxlSW5wdXRNb2R1bGUge31cbiJdfQ==