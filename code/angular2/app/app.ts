import {Component, Input} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'

@Component({
    selector: 'greeter',
    templateUrl: '/app/greeter.html'
})
class Greeter {
    @Input() greeting: string;
    reset(input: HTMLInputElement) {
        this.greeting = '';
        input.focus();
    }
}

@Component({
    selector: 'hello-app',
    directives: [Greeter],
    template: '<greeter greeting="Hello"></greeter>'
})
class App {
}
bootstrap(App);
