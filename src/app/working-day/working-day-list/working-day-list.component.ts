import { Component } from '@angular/core';
import { WorkingDay } from './../model/working-day';

@Component({
  selector: 'app-working-day-list',
  templateUrl: './working-day-list.component.html',
  styleUrls: ['./working-day-list.component.scss']
})
export class WorkingDayListComponent {
  displayedColumns = ['date', 'startTime', 'endTime', 'registered'];

  list: WorkingDay[] = [
    {date: '2023-01-05', startTime: '08:30', endTime: '12:30', description: '', registered: false},
    {date: '2023-01-05', startTime: '13:30', endTime: '16:00', description: '', registered: false},
    {date: '2023-01-05', startTime: '16:00', endTime: '18:00', description: '', registered: false}
  ];
}