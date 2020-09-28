export class Gamer{
    id:string;
    name:string;
    points:number;
    avatar_image:string;
    games_number:number;
    latest_meeting:Date;
    tournaments:string[];

    constructor(){
        this.tournaments=[];
    }

    public static fromFirestore(id:string,data:any):Gamer
    {
        if(!data) return new Gamer();

        return {
            avatar_image:data.photo_url,
            games_number:data.games_number,
            latest_meeting:data.latest_meeting?data.latest_meeting.toDate():new Date(),
            id:id,
            name:data.name,
            points:data.points,
            tournaments:data.tournaments
        };
    }
}