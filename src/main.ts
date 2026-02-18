import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Books } from './app/components/books/books';

// first param: default component to load when app starts
bootstrapApplication(Books, appConfig)
  .catch((err) => console.error(err));
