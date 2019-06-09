import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const window: any;
declare const dataLayer: any;

function installAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args){ dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'UA-140798040-1');
}

if (environment.production) {
  enableProdMode();
  installAnalytics();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
