import {Component, View, bootstrap, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'hello-app',
})
@View({
    templateUrl: 'app/hello.html',
    directives: [FORM_DIRECTIVES]
})
export default class HelloCmp {
    greeting: string;
    constructor() {
        this.greeting = 'Hello';
    }
    reset(input) {
        this.greeting = '';
        input.focus();
    }
    updateModel(value) {
        this.greeting = value;
    }
}
