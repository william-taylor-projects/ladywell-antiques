
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './modules/app.module';

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    enableProdMode();
}

let platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
