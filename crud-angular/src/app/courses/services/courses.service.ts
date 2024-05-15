import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  constructor(private httpClient: HttpClient) {}

  list(): Course[] {
    return [
      {
        _id: '1',
        name: 'Angular',
        category: 'Front End',
      },
      {
        _id: '2',
        name: 'Android',
        category: 'Mobile Nativo',
      },
      {
        _id: '3',
        name: 'Jetpack Compose',
        category: 'Mobile Nativo',
      },
      {
        _id: '4',
        name: 'Java + Spring',
        category: 'Back End',
      },
    ]
  }
}
