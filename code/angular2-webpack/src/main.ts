import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { App } from './app/app.ts';
if (process.env.ENV === 'production') {
    enableProdMode();
}
bootstrap(App);
