import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private readonly API = "http://localhost:8080/api/courses";

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      tap(
        courses => console.log(courses)
      )
    );
  }

  save(course: Partial<Course>){
    return this.httpClient.post<Course>(this.API, course).pipe(first());
  }
}
