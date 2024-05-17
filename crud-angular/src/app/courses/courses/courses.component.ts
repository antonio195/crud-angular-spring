import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { CategoryPipe } from '../../shared/pipes/category.pipe';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    AppMaterialModule,
    CommonModule,
    CategoryPipe
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  displayedColumns = ["name", "category"];

  constructor(
    private cousesService: CoursesService,
    public dialog: MatDialog
  ){
    this.courses$ = this.cousesService.list()
    .pipe(
      catchError(error => {
        this.onError("Erro ao carregar cursos...");
        return of([])
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  ngOnInit(): void {
  }

}
