import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    //AppModule,
    ServerModule,
    //ModuleMapLoaderModule,

  ],
  //bootstrap: [AppComponent],
 /* providers: [
    provideModuleMap({}) // Adjust if you have a module map
  ],*/
})
export class AppServerModule {}
