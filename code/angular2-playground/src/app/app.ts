import { Component } from '@angular/core';
import CheckLabelList from './checklabellist';
import {Check} from './structures';


import '../../public/css/styles.css';

@Component({
    selector: 'main',
    directives: [CheckLabelList],
    template: `<check-label-list [checks]=[
        {
            label: 'Check 1',
            checked: true
        }, {
            label: 'Check 2',
            checked: false
        }]></check-label-list>`
})
export class App {
}
