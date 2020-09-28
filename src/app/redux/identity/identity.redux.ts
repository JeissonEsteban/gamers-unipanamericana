
import { Action } from '@ngrx/store';
import { IdentityModel } from 'src/core/model/IdentityModel';
import { User } from 'src/core/model/User';


//INSTANCE
function _instance() {
    return new IdentityModel();
}


//INIT
export const InitModel: IdentityModel = _instance();

//CONSTANTS
export enum Types {
    SET_USER = '[IdentityModel] SET_USER',
    REMOVE_USER = '[IdentityModel] REMOVE_USER',
    LOGOUT = '[IdentityModel] LOGOUT',
}

//METHODS
export class SetUserAction implements Action {
    readonly type = Types.SET_USER;
    readonly payload: User;
    constructor(_in: User) { this.payload = _in; }
}
export class RemoveUserAction implements Action {
    readonly type = Types.REMOVE_USER;
}
export class LogOutAction implements Action {
    readonly type = Types.LOGOUT;
}




//export
export type _Actions =  SetUserAction | RemoveUserAction|LogOutAction

export function IdentityReducer(state: IdentityModel = InitModel, action: _Actions): IdentityModel {
    switch (action.type) {
        case Types.SET_USER:
            return { ...state, user:action.payload };
        case Types.REMOVE_USER:
            return { ...state, user:new User() };
        case Types.LOGOUT:
            return { ...state };
        default:
            return state;
    }
}