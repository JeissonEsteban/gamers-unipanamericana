import { ActionReducerMap } from '@ngrx/store';
import { GamerModel } from 'src/core/model/GamerModel';
import { IdentityModel } from 'src/core/model/IdentityModel';
import { TournamentModel } from 'src/core/model/TournamentModel';
import { GamerReducer } from './gamer/gamer.redux';
import { TournamentReducer } from './tournament/tournament.redux';
import { IdentityReducer } from './identity/identity.redux';

export interface AppState {
    identity:IdentityModel;
    gamer:GamerModel;
    tournament:TournamentModel;
}
export const reducers: ActionReducerMap<AppState> = {
    identity:IdentityReducer,
    gamer:GamerReducer,
    tournament:TournamentReducer
}