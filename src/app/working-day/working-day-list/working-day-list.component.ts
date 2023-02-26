import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { WorkingDay } from './../model/working-day';
import { WorkingDayService } from './../working-day.service';

@Component({
  selector: 'app-working-day-list',
  templateUrl: './working-day-list.component.html',
  styleUrls: ['./working-day-list.component.scss']
})
export class WorkingDayListComponent{
  displayedColumns = ['date', 'startTime', 'endTime', 'registered'];
  list: WorkingDay[];
  dataSource: MatTableDataSource<WorkingDay>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: WorkingDayService){
    this.service.getAll().subscribe(data => {
      this.list = data;
      this.dataSource = new MatTableDataSource(this.list);
      this.dataSource.paginator = this.paginator;
    });
  }
}