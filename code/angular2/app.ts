import {Component, View, Input} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'

@Component({
    selector: 'hello-app',
})
@View({
    templateUrl: 'hello.html'
})
class HelloCmp {
    @Input() greeting: string;
    reset(input: HTMLInputElement) {
        this.greeting = '';
        input.focus();
    }
    //updateModel(value) {
    //    this.greeting = value;
    //}
}

class App {

}
bootstrap(HelloCmp);
