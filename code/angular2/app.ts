import {bootstrap}    from 'angular2/platform/browser'

import {Component, View} from 'angular2/core';
// https://angular.io/cheatsheet
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'hello-app',
})
@View({
    templateUrl: 'hello.html',
    directives: [FORM_DIRECTIVES]
})
class HelloCmp {
    greeting: string;
    constructor() {
        this.greeting = 'Hello';
    }
    reset(input: HTMLInputElement) {
        this.greeting = '';
        input.focus();
    }
    //updateModel(value) {
    //    this.greeting = value;
    //}
}
bootstrap(HelloCmp);
