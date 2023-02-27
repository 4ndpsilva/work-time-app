import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { GenericDataSource } from './../generic-datasource';
import { WorkingDay } from './../model/working-day';
import { WorkingDayService } from './../working-day.service';

@Component({
  selector: 'app-working-day-list',
  templateUrl: './working-day-list.component.html',
  styleUrls: ['./working-day-list.component.scss']
})
export class WorkingDayListComponent implements AfterViewInit{
  displayedColumns = ['date', 'startTime', 'endTime', 'registered'];  
  customDataSource: GenericDataSource<WorkingDay>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: WorkingDayService){
    this.customDataSource = new GenericDataSource(this.service.getAll());
  }

  ngAfterViewInit(): void {
    this.customDataSource.paginator = this.paginator;
  }
}