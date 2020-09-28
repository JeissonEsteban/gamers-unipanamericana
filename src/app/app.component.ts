import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetCurrentGamer } from './redux/gamer/gamer.redux';
import { RemoveUserAction, SetUserAction } from './redux/identity/identity.redux';
import { AppState } from './redux/redux.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
 //#region Properties 
  //#endregion Properties 
 
 //#region Constructor 
 constructor(
  public auth: AngularFireAuth,
  public store:Store<AppState>,
  public router:Router
 ){this.Init();}
  //#endregion Constructor 
 
 //#region Subscribes 
  //#endregion Subscribes 
 
  //#region Public Methods 
 ngOnInit(){}
 //#endregion Public Methods 
 
 //#region Private Methods 
 private Init(){
  this.ValidateAuthentication();
 }
 private ValidateAuthentication()
 {
  this.auth.authState.subscribe((state)=>{
    if(state)
    {
      this.store.dispatch(new SetUserAction({
        email:state.email,
        photoUrl:state.photoURL,
        uid:state.uid,
        userName:state.displayName
      }));
 
      this.router.navigate(['/dashboard']);

    }
    else
    {
      this.router.navigate(['/']);
      this.store.dispatch(new RemoveUserAction());
    }
     
  })
 }
  //#endregion Private Methods 
 
  //#region Events Methods 
  //#endregion Events Methods
}
