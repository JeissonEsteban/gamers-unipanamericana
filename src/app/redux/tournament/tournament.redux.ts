
import { Action } from '@ngrx/store';
import { Tournament } from 'src/core/model/Tournament';
import { TournamentModel } from 'src/core/model/TournamentModel';
import { User } from 'src/core/model/User';



//INSTANCE
function _instance() {
    return new TournamentModel();
}


//INIT
export const InitModel: TournamentModel = _instance();

//CONSTANTS
export enum Types {
    GET_TOP_4_TOURNAMENTS = '[TournamentModel] GET_TOP_4_TOURNAMENTS',
    SET_TOURNAMENTS='[TournamentModel] SET_TOURNAMENTS',
    CLEAN_TOURNAMENTS='[TournamentModel] CLEAN_TOURNAMENTS',
    JOIN_IN_TOURNAMENT='[TournamentModel] JOIN_IN_TOURNAMENT',
}

//METHODS
export class GetTop4Tournaments implements Action {
    readonly type = Types.GET_TOP_4_TOURNAMENTS;

}
export class SetTournamentsAction implements Action {
    readonly type = Types.SET_TOURNAMENTS;
    readonly payload: Tournament[];
    constructor(_in: Tournament[]) { this.payload = _in; }
}
export class CleanTournamentsAction implements Action {
    readonly type = Types.CLEAN_TOURNAMENTS;
}
export class JoinInTournamentAction implements Action {
    readonly type = Types.JOIN_IN_TOURNAMENT;
    readonly payload: Tournament;
    constructor(_in: Tournament) { this.payload = _in; }
}




//export
export type _Actions =  GetTop4Tournaments | SetTournamentsAction | CleanTournamentsAction|JoinInTournamentAction;

export function TournamentReducer(state: TournamentModel = InitModel, action: _Actions): TournamentModel {
    switch (action.type) {
        case Types.GET_TOP_4_TOURNAMENTS:
            return { ...state};
        case Types.SET_TOURNAMENTS:
            return { ...state, current_tournaments:action.payload };
        case Types.CLEAN_TOURNAMENTS:
            return { ...state };
        case Types.JOIN_IN_TOURNAMENT:
            return { ...state };
        default:
            return state;
    }
}