import { Gamer } from 'src/core/model/Gamer';
import { Tournament } from 'src/core/model/Tournament';

export class DashboardPageModel
{
    top4Gamers:Gamer[];
    top4Tournaments:Tournament[];
    current_gamer:Gamer;

    constructor()
    {
        this.top4Gamers=[];
        this.top4Tournaments=[];
        this.current_gamer=new Gamer();
    }

}