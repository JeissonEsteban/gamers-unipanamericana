import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  //#region Properties 
   //#endregion Properties 
  
  //#region Constructor 
  constructor(
    private message: NzMessageService,
    public auth: AngularFireAuth
  ){this.Init();}
   //#endregion Constructor 
  
  //#region Subscribes 
   //#endregion Subscribes 
  
   //#region Public Methods 
  ngOnInit(){}

  public loginWithMicrosoft()
  {
    this.message.error("No hemos configurado este acceso. Ingresa con una cuenta GOOGLE.");
  }
  public loginWithGoogle()
  {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).catch(err=>this.message.error(err.message));
  }
  //#endregion Public Methods 
  
  //#region Private Methods 
  private Init(){}
   //#endregion Private Methods 
  
   //#region Events Methods 
   //#endregion Events Methods

}
