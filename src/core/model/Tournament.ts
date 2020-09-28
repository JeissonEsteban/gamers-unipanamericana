export class Tournament{
    id:string;
    name:string;
    state:string;
    max_participants:number;
    images:string[];
    participants_number:number;
    subscription_start_date:Date;
    subscription_end_date:Date;
    joinIn:boolean;

    public static fromFirestore(id:string,data:any):Tournament
    {
        if(!data) return new Tournament();

        return {
            images:data.images??[],
            max_participants:data.max_participants,
            subscription_start_date:data.subscription_start_date.toDate(),
            subscription_end_date:data.subscription_end_date.toDate(),
            id:id,
            name:data.name,
            state:data.state,
            participants_number:data.participants_number,
            joinIn:false
        };
    }
    public static copy(data:any):Tournament
    {
        if(!data) return new Tournament();

        return {
            images:data.images??[],
            max_participants:data.max_participants,
            subscription_start_date:data.subscription_start_date,
            subscription_end_date:data.subscription_end_date,
            id:data.id,
            name:data.name,
            state:data.state,
            participants_number:data.participants_number,
            joinIn:data.joinIn
        };
    }
}