// Shims + Deps
import "reflect-metadata";
import "core-js";
import "zone.js";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModule } from './modules/app.module';

if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
    enableProdMode();
}

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

