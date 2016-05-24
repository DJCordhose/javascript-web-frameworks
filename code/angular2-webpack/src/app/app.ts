import { Component, Input } from '@angular/core';
@Component({
    selector: 'greeter',
    template: require('./greeter.html')
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
export class App {
}
