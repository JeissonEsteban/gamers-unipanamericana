import { Component, Input, OnInit } from '@angular/core';
import { Gamer } from 'src/core/model/Gamer';

@Component({
  selector: 'component-gamer-status',
  templateUrl: './gamer-status.component.html',
  styleUrls: ['./gamer-status.component.less']
})
export class GamerStatusComponent implements OnInit {

  //#region Properties 
  @Input('Gamer')
  public gamer:Gamer;
   //#endregion Properties 
  
  //#region Constructor 
  constructor(){this.Init();}
   //#endregion Constructor 
  
  //#region Subscribes 
   //#endregion Subscribes 
  
   //#region Public Methods 
  ngOnInit(){}
  //#endregion Public Methods 
  
  //#region Private Methods 
  private Init(){}
   //#endregion Private Methods 
  
   //#region Events Methods 
   //#endregion Events Methods

}
