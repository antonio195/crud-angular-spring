import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { CategoryPipe } from '../../../shared/pipes/category.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesListComponent } from '../../components/courses-list/courses-list.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    AppMaterialModule,
    CommonModule,
    CategoryPipe,
    CoursesListComponent
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(
    private cousesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
  ){
    this.courses$ = this.getCourses();
  }

  refresh(){
    this.courses$ = this.getCourses();
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  onAdd(){
    this.router.navigate(["new"], {relativeTo: this.route});
  }

  onEdit(course: Course){
    this.router.navigate(["edit", course.id], {relativeTo: this.route});
  }

  getCourses(){
    return this.cousesService.list()
    .pipe(
      catchError(error => {
        this.onError("Erro ao carregar cursos...");
        return of([])
      })
    );
  }

  onRemove(course: Course){
    this.cousesService.remove(course.id).subscribe(
      () => {
        this._snackBar.open("Sucesso ao deletar curso.", "", {duration:5000,
          verticalPosition: "top",
          horizontalPosition: "center"
        }
      );
        this.refresh();
      },
      error => {
        this.onError("Erro ao deletar curso.");
      }
    );
  }

  ngOnInit(): void {
  }

}
