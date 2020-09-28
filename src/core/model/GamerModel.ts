import { Gamer } from './Gamer';


export class GamerModel{
    gamers:Gamer[];
    current_gamer:Gamer;

    constructor()
    {
        this.gamers= [];
        this.current_gamer=new Gamer();
    }
}