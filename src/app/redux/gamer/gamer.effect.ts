import { Injectable } from '@angular/core';
import { Actions,createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { GetCurrentGamer, SetCurrentGamer, SetGamersAction, Types } from './gamer.redux';
import { Gamer } from 'src/core/model/Gamer';

@Injectable()
export class GamerEffects {


    getTop10Gamers$ = createEffect(
        () =>this.actions$.pipe(
            ofType(Types.GET_TOP_4_GAMERS),
            mergeMap(action =>
                this.firestore.collection('gamer',(ref)=>ref.orderBy('points','desc').limit(4)).get().pipe(
                  map((listRef: any) => {
                    let list:Gamer[]=[];
                    listRef.forEach(docRef => {
                        list.push(Gamer.fromFirestore(docRef.id,docRef.data()));
                    });
                    return new SetGamersAction(list);
                  }))
                )
            )
        );


        getCurrentGamer$ = createEffect(
            () =>this.actions$.pipe(
                ofType(Types.GET_CURRENT_GAMER),
                mergeMap((action:GetCurrentGamer) =>
                    this.firestore.collection('gamer').doc(action.payload.uid).get().pipe(
                      map((gamer_ref) => {
                       if(gamer_ref.exists)
                       {
                        return new SetCurrentGamer(Gamer.fromFirestore(gamer_ref.id,gamer_ref.data()));
                       }
                       else{
                        return new SetCurrentGamer(new Gamer());
                       }
                        
                      }))
                    )
                )
            );
           

/*
            tap(() => {
                this.firestore.collection('gamer',(ref)=>ref.orderBy('points','desc').limit(10)).get().subscribe(listRef=>{
                    let list:Gamer[]=[];
                    listRef.forEach(docRef => {
                        list.push(Gamer.fromFirestore(docRef.id,docRef.data()));
                    });

                });
                return new SetGamersAction(list);
            })*/
          //  ))



    constructor(
        private actions$: Actions,
        public firestore: AngularFirestore
    ) {}
}