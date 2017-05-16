
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './modules/app.module';

//enableProdMode();

let platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
