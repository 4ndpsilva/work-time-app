import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkingDayListComponent } from './working-day-list/working-day-list.component';
import { WorkingDayFormComponent } from './working-day-form/working-day-form.component';

const routes: Routes = [
  { path: '', component: WorkingDayListComponent },
  { path: 'edit/:id', component: WorkingDayFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkingDayRoutingModule { }