import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component.ts';
if (process.env.ENV === 'production') {
    enableProdMode();
}
bootstrap(AppComponent);
