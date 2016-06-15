import { Component, Input } from '@angular/core';
import CheckLabel from './checklabel';

import {Check} from './structures';

@Component({
    selector: 'check-label-list',
    directives: [CheckLabel],
    template:
`<div class='CheckLabelList' *ngFor="let check of checks">
    <check-label label="{{check.label}}" checked="{{check.check}}"></check-label>
</div>
`
})
export default class CheckLabelList {
    @Input() checks: Array<Check>;
}
