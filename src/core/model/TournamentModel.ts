import { Tournament } from './Tournament';

 

export class TournamentModel{
    current_tournaments:Tournament[];

    constructor()
    {
        this.current_tournaments= [];
    }
}