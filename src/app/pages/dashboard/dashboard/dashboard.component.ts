import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetTop4Gamers } from 'src/app/redux/gamer/gamer.redux';
import { AppState } from 'src/app/redux/redux.model';
import { GetTop4Tournaments } from 'src/app/redux/tournament/tournament.redux';
import { Tournament } from 'src/core/model/Tournament';
import { TournamentModel } from 'src/core/model/TournamentModel';
import { User } from 'src/core/model/User';
import { DashboardPageModel } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

//#region Properties 
public pageModel:DashboardPageModel= new DashboardPageModel();
public user:User= new User();
 //#endregion Properties 

//#region Constructor 
constructor(
  public store:Store<AppState>,
){this.Init();}
 //#endregion Constructor 

//#region Subscribes 
private UserSubscribe()
{
  this.store.select('identity').subscribe(state=>{
    this.user=state.user;
  })
}
private GamersSubscribe()
{
  this.store.select('gamer').subscribe(state=>{
    this.pageModel.top4Gamers=state.gamers;
    this.pageModel.current_gamer=state.current_gamer;
  })
}
private TournamentsSubscribe()
{
  this.store.select('tournament').subscribe(state=>{

    this.pageModel.top4Tournaments=state.current_tournaments;


  })
}
private GetTop4Gamers()
{
  this.store.dispatch(new GetTop4Gamers());
}
private GetTop4Tournaments()
{
  this.store.dispatch(new GetTop4Tournaments());
}
 //#endregion Subscribes 

 //#region Public Methods 
ngOnInit(){
  this.UserSubscribe();
  this.GamersSubscribe();
  this.TournamentsSubscribe();
  this.GetTop4Gamers();
  this.GetTop4Tournaments();
}
//#endregion Public Methods 

//#region Private Methods 
private Init(){}
 //#endregion Private Methods 

 //#region Events Methods 
 //#endregion Events Methods

}
