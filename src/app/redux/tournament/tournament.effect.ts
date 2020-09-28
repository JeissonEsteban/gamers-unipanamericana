import { Injectable } from '@angular/core';
import { Actions,createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map,tap} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { GetTop4Tournaments, JoinInTournamentAction, SetTournamentsAction, Types } from './tournament.redux';
import { Tournament } from 'src/core/model/Tournament';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AppState } from '../redux.model';
import { User } from 'src/core/model/User';
import { Gamer } from 'src/core/model/Gamer';
import { GetCurrentGamer, GetTop4Gamers } from '../gamer/gamer.redux';

@Injectable()
export class TournamentEffects {


    getTop4Tournaments$ = createEffect(
        () =>this.actions$.pipe(
            ofType(Types.GET_TOP_4_TOURNAMENTS),
            mergeMap(action =>
                this.firestore.collection('tournament',(ref)=>ref.orderBy('participants_number','desc').limit(10)).get().pipe(
                  map((listRef: any) => {
                    let list:Tournament[]=[];
                    listRef.forEach(docRef => {
                        list.push(Tournament.fromFirestore(docRef.id,docRef.data()));
                    });
                    return new SetTournamentsAction(list);
                  }))
                )
            )
        );
           

        joinInTournament$ = createEffect(
            () =>this.actions$.pipe(
                ofType(Types.JOIN_IN_TOURNAMENT),
                tap((action:JoinInTournamentAction) =>{

                    this.firestore.collection('gamer').doc(this.current_user.uid).get()
                    .subscribe(gamer_doc=>{
                        if(gamer_doc.exists)
                        {   
                            let gamer=Gamer.fromFirestore(gamer_doc.id,gamer_doc.data());
                            gamer.tournaments.push(action.payload.id);
                            this.firestore.collection('gamer').doc(this.current_user.uid).update({games_number:gamer_doc.data().games_number+1,tournaments:gamer.tournaments}).then(()=>{
                                this.firestore.collection('tournament').doc(action.payload.id).collection('gamer').doc(this.current_user.uid).set({
                                    uid:this.current_user.uid,
                                    photo_url:this.current_user.photoUrl,
                                    name:this.current_user.userName
                                }).then(()=>{
                                    this.firestore.collection('tournament').doc(action.payload.id).get()
                                    .subscribe(t_ref=>{
                                        let tourn_=Tournament.fromFirestore(t_ref.id,t_ref.data());
                                        this.firestore.collection('tournament').doc(action.payload.id).update({
                                            participants_number:tourn_.participants_number+1
                                        }).then(()=>{
                                            this.store.dispatch(new GetTop4Tournaments());
                                            this.store.dispatch(new GetTop4Gamers());
                                            this.store.dispatch(new GetCurrentGamer(this.current_user));
                                        })
                                    });
                                })
                            })
                            
                        }
                        else{
                            this.firestore.collection('gamer').doc(this.current_user.uid).set({
                                games_number:1,
                                latest_meeting:null,
                                name:this.current_user.userName,
                                photo_url:this.current_user.photoUrl,
                                points:0,
                                tournaments:[
                                    action.payload.id
                                ]
        
                             }).then(ok=>{

                           
                                 this.firestore.collection('tournament').doc(action.payload.id).collection('gamer').doc(this.current_user.uid).set({
                                     uid:this.current_user.uid,
                                     photo_url:this.current_user.photoUrl,
                                     name:this.current_user.userName
                                 }).then(()=>{
                                    this.firestore.collection('tournament').doc(action.payload.id).get()
                                    .subscribe(t_ref=>{
                                        let tourn_=Tournament.fromFirestore(t_ref.id,t_ref.data());
                                        this.firestore.collection('tournament').doc(action.payload.id).update({
                                            participants_number:tourn_.participants_number+1
                                        }).then(()=>{
                                            this.store.dispatch(new GetTop4Tournaments());
                                            this.store.dispatch(new GetTop4Gamers());
                                            this.store.dispatch(new GetCurrentGamer(this.current_user));
                                        })
                                    });
                                 
                                 })
                             });
                        }
                    });

                    
                })
            ),{dispatch:false});
/*

map((listRef: any) => {
                        let list:Tournament[]=[];
                        listRef.forEach(docRef => {
                            list.push(Tournament.fromFirestore(docRef.id,docRef.data()));
                        });
                        return new SetTournamentsAction(list);
                      })
*/
     private current_user:User;                 

    constructor(
        private actions$: Actions,
        public firestore: AngularFirestore,
        public auth:AngularFireAuth,
        public store:Store<AppState>,
    ) {
        this.store.select('identity').subscribe(state=>{this.current_user=state.user;})
    }
}