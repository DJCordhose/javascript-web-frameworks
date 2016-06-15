import { Component, Input } from '@angular/core';
@Component({
    selector: 'check-label',
    template: `<div [ngClass]="{'CheckLabel-checked': checked, 'CheckLabel-unchecked': !checked}">{{label}}</div>`
})
export default class CheckLabel {
    @Input() label: string;
    @Input() checked: boolean;
}
