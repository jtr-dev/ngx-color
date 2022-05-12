import { EventEmitter, OnChanges } from '@angular/core';
import { getContrastingColor } from 'ngx-color';
export declare class CompactColorComponent implements OnChanges {
    color: string;
    active: boolean;
    onClick: EventEmitter<any>;
    onSwatchHover: EventEmitter<any>;
    swatchStyle: Record<string, string>;
    swatchFocus: Record<string, string>;
    getContrastingColor: typeof getContrastingColor;
    ngOnChanges(): void;
    handleClick({ hex, $event }: {
        hex: any;
        $event: any;
    }): void;
}
