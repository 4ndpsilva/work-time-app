import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { WorkingDay } from './../model/working-day';
import { WorkingDayService } from './../working-day.service';

@Component({
  selector: 'app-working-day-list',
  templateUrl: './working-day-list.component.html',
  styleUrls: ['./working-day-list.component.scss']
})
export class WorkingDayListComponent {
  displayedColumns = ['date', 'startTime', 'endTime', 'registered'];

  list$: Observable<WorkingDay[]>;

  constructor(private service: WorkingDayService){
    this.list$ = this.service.getAll();
  }
}