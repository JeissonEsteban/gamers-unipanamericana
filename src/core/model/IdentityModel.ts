import { User } from './User';

export class IdentityModel{
    user:User;

    constructor()
    {
        this.user= new User();
    }
}