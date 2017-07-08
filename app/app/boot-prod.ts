// Shims + Deps
import "reflect-metadata";
import "core-js/shim";
import "zone.js/dist/zone";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './modules/app.module';

enableProdMode();

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

