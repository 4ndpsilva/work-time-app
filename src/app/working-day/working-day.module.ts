import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './../shared/app-material/app-material.module';

import { WorkingDayService } from './working-day.service';
import { WorkingDayRoutingModule } from './working-day-routing.module';
import { WorkingDayListComponent } from './working-day-list/working-day-list.component';
import { WorkingDayFormComponent } from './working-day-form/working-day-form.component';

@NgModule({
  declarations: [
    WorkingDayListComponent,
    WorkingDayFormComponent
  ],
  imports: [
    CommonModule,
    WorkingDayRoutingModule,
    AppMaterialModule
  ],
  providers: [WorkingDayService]
})
export class WorkingDayModule { }