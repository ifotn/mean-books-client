import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// first param: default component to load when app starts
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
