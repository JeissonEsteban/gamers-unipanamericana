import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/redux.model';
import { JoinInTournamentAction } from 'src/app/redux/tournament/tournament.redux';
import { Gamer } from 'src/core/model/Gamer';
import { Tournament } from 'src/core/model/Tournament';

@Component({
  selector: 'component-tournament-preview',
  templateUrl: './tournament-preview.component.html',
  styleUrls: ['./tournament-preview.component.less']
})
export class TournamentPreviewComponent implements OnInit {

  //#region Properties 
  @Input('Tournament')
  public tournament:Tournament;

  private current_gamer:Gamer= new Gamer();
   //#endregion Properties 
  
  //#region Constructor 
  constructor(
    public store:Store<AppState>,
  ){this.Init();}
   //#endregion Constructor 
  
  //#region Subscribes 
  public CurrentGamerSubscribe()
  {
    this.store.select('gamer').subscribe(state=>{
      this.current_gamer=state.current_gamer;
    })
  }
   //#endregion Subscribes 
  
   //#region Public Methods 
  ngOnInit(){
    this.CurrentGamerSubscribe();
  }
  //#endregion Public Methods 
  
  //#region Private Methods 
  private Init(){}
   //#endregion Private Methods 
  
   //#region Events Methods 
   public JoinInEvent()
   {
    this.store.dispatch(new JoinInTournamentAction(this.tournament));
   }
   public CanJoInEvent():boolean
   {
    return this.current_gamer.tournaments.filter(p=>p==this.tournament.id).length==0;
   }

   //#endregion Events Methods

}
