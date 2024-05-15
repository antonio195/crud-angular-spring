import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  displayedColumns = ["name", "category"];

  constructor(private cousesService: CoursesService){

  }

  ngOnInit(): void {
    this.courses = this.cousesService.list();
  }

}
