import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    /* Module */
    NzLayoutModule,
    NzButtonModule,
    NzGridModule,
    NzMessageModule,
    NzSpinModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzIconModule,
    NzCardModule
  ]
})
export class LibModule { }
