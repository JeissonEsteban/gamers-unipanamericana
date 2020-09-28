import { Injectable } from '@angular/core';
import { Actions,createEffect, ofType } from '@ngrx/effects';
import { SetUserAction, Types } from './identity.redux';
import { map, tap,concatMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { GetCurrentGamer } from '../gamer/gamer.redux';

@Injectable()
export class IdentityEffects {


    logoutSuccess$ = createEffect(
        () =>this.actions$.pipe(
            ofType(Types.LOGOUT),
            tap(() => {
                this.auth.signOut();
            })), { dispatch: false })

    loginEffect$ = createEffect(
        () =>this.actions$.pipe(
            ofType(Types.SET_USER),
                map( (action:SetUserAction) => action.payload ),
                concatMap( payload => [
                    new GetCurrentGamer( payload )
                ])
            ));

    constructor(
        private actions$: Actions,
        public auth: AngularFireAuth
    ) {}
}