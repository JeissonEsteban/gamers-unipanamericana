import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GamerStatusComponent } from 'src/app/components/gamer-status/gamer-status.component';
import { TournamentPreviewComponent } from 'src/app/components/tournament-preview/tournament-preview.component';
import { LibModule } from 'src/app/lib.module';

 

@NgModule({
  declarations: [
    DashboardComponent,
    GamerStatusComponent,
    TournamentPreviewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LibModule
  ]
})
export class DashboardModule { }
