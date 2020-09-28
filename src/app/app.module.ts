import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ReduxModule } from './redux/redux.module';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { AngularFireModule } from '@angular/fire';
import { LibModule } from './lib.module';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationLayoutComponent,
    DefaultLayoutComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReduxModule,
    AngularFireModule.initializeApp(environment.firebase),
    LibModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
