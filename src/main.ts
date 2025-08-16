import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { EmprezaComponent } from './app/components/empreza/empreza';

bootstrapApplication(EmprezaComponent, appConfig)
  .catch((err) => console.error(err));
