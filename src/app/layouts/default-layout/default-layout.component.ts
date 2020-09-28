import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/redux.model';
import { User } from 'src/core/model/User';
import { LogoutOutline } from '@ant-design/icons-angular/icons';
import { LogOutAction } from 'src/app/redux/identity/identity.redux';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterAction } from '@ngrx/router-store';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.less']
})
export class DefaultLayoutComponent implements OnInit {

 //#region Properties 
 public user:User= new User();
 public sider_width:number=200;
 public menu_display:boolean=false;
 public current_url:string;
  //#endregion Properties 
 
 //#region Constructor 
 constructor(
  public store:Store<AppState>,
  public router:Router,
  public activeRouter:ActivatedRoute
 ){this.Init();}
  //#endregion Constructor 
 
 //#region Subscribes 
 private UserSubscribe()
{
  this.store.select('identity').subscribe(state=>{
    this.user=state.user;
  })
}
  //#endregion Subscribes 
 
  //#region Public Methods 
 ngOnInit(){
  this.UserSubscribe();
  this.current_url=this.router.url;
 }
 public LogOut()
 {
  this.store.dispatch(new LogOutAction())
 }
 
 //#endregion Public Methods 
 
 //#region Private Methods 
 private Init(){

   if(window.screen.width<400){
    this.sider_width=window.screen.width;
   }
   else
    this.sider_width=300;
 }
  //#endregion Private Methods 
 
  //#region Events Methods 
  public DisplayMenuEvent()
  {
    this.menu_display=!this.menu_display;
  }
  public NavigateDashboardEvent()
  {
    this.router.navigate(['/dashboard']);
  }
  //#endregion Events Methods

}
