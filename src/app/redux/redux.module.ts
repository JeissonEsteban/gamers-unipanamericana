import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { reducers } from './redux.model';
import { IdentityEffects } from './identity/identity.effect';
import { GamerEffects } from './gamer/gamer.effect';
import { TournamentEffects } from './tournament/tournament.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      IdentityEffects,
      GamerEffects,
      TournamentEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
  ]
})
export class ReduxModule { }
