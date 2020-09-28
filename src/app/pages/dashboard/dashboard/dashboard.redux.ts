
import { Action } from '@ngrx/store';
import { IdentityModel } from 'src/core/model/IdentityModel';
import { User } from 'src/core/model/User';
import { DashboardPageModel } from './dashboard.model';

/*
//INSTANCE
function _instance() {
    return new DashboardPageModel();
}


//INIT
export const InitModel: DashboardPageModel = _instance();

//CONSTANTS
export enum Types {
     
}

//METHODS
 


//export
export type _Actions =  SetUserAction | RemoveUserAction

export function IdentityReducer(state: IdentityModel = InitModel, action: _Actions): IdentityModel {
    switch (action.type) {
        case Types.SET_USER:
            return { ...state, user:action.payload };
        case Types.REMOVE_USER:
            return { ...state, user:null 
            };
        default:
            return state;
    }
}*/