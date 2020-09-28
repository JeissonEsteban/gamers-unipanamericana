
import { Action } from '@ngrx/store';
import { Gamer } from 'src/core/model/Gamer';
import { GamerModel } from 'src/core/model/GamerModel';
import { User } from 'src/core/model/User';



//INSTANCE
function _instance() {
    return new GamerModel();
}


//INIT
export const InitModel: GamerModel = _instance();

//CONSTANTS
export enum Types {
    GET_TOP_4_GAMERS = '[GamerModel] GET_TOP_4_GAMERS',
    SET_GAMERS='[GamerModel] SET_GAMERS',
    CLEAN_GAMERS='[GamerModel] CLEAN_GAMERS',
    GET_CURRENT_GAMER = '[GamerModel] GET_CURRENT_GAMER',
    SET_CURRENT_GAMER='[GamerModel] SET_CURRENT_GAMER',
}

//METHODS
export class GetTop4Gamers implements Action {
    readonly type = Types.GET_TOP_4_GAMERS;

}
export class SetGamersAction implements Action {
    readonly type = Types.SET_GAMERS;
    readonly payload: Gamer[];
    constructor(_in: Gamer[]) { this.payload = _in; }
}
export class CleanGamersAction implements Action {
    readonly type = Types.CLEAN_GAMERS;
}
export class GetCurrentGamer implements Action {
    readonly type = Types.GET_CURRENT_GAMER;
    readonly payload: User;
    constructor(_in: User) { this.payload = _in; }
}
export class SetCurrentGamer implements Action {
    readonly type = Types.SET_CURRENT_GAMER;
    readonly payload: Gamer;
    constructor(_in: Gamer) { this.payload = _in; }
}




//export
export type _Actions =  GetTop4Gamers | SetGamersAction | CleanGamersAction|GetCurrentGamer|SetCurrentGamer

export function GamerReducer(state: GamerModel = InitModel, action: _Actions): GamerModel {
    switch (action.type) {
        case Types.GET_TOP_4_GAMERS:
            return { ...state};
        case Types.SET_GAMERS:
            return { ...state, gamers:action.payload };
        case Types.CLEAN_GAMERS:
            return { ...state };
        case Types.GET_TOP_4_GAMERS:
            return { ...state};
        case Types.SET_CURRENT_GAMER:
            return { ...state,current_gamer:action.payload };
        default:
            return state;
    }
}