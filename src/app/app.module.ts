import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { HttpsRequestInterceptor } from './interceptors/http-request-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
