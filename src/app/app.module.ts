import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule} from '@nebular/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import {
  NbButtonModule,
  NbCardModule,
} from '@nebular/theme';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NbButtonModule,
    NbCardModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://example.com/app-api/v1',
          login: {
            endpoint: '/auth/sign-in',
            method: 'post',
          },
          register: {
            endpoint: '/auth/sign-up',
            method: 'post',
          },
          logout: {
            endpoint: '/auth/sign-out',
            method: 'post',
          },
          requestPass: {
            endpoint: '/auth/request-pass',
            method: 'post',
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
            method: 'post',
          },

        }),
      ],
      forms: {},
    }),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
