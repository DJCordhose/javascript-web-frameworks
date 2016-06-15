import { Component } from '@angular/core';
import {AppComponent} from './app.component';

import '../../public/css/styles.css';

@Component({
    selector: 'main',
    directives: [AppComponent],
    template: `<hero></hero>`
})
export class App {
}
