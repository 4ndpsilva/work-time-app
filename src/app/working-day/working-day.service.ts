import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

import { WorkingDay } from './model/working-day';

@Injectable()
export class WorkingDayService {
  private readonly apiURL: string = 'http://localhost:3000/work-time';

  constructor(private http: HttpClient) { }

  getAll(): Observable<WorkingDay[]>{
    return this.http.get<WorkingDay[]>(this.apiURL)
      .pipe(
        delay(2000)
      );
  }
}