import {bootstrap}    from 'angular2/platform/browser'
//import {Component, View, FORM_DIRECTIVES} from 'angular2/angular2';

import {Component, View } from 'angular2/core';

@Component({
    selector: 'hello-app',
})
@View({
    templateUrl: 'hello.html'
    //directives: [FORM_DIRECTIVES]
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
    updateModel(value) {
        this.greeting = value;
    }
}
bootstrap(HelloCmp);
