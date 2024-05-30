import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [""],
    category: [""]
  });

  selectedCourse = "";

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ){}

  ngOnInit(): void {}

  onSubmit(): void{
    this.service.save(this.form.value).subscribe(
      result => this.onSucess(),
      error => this.onError()
    );
  }

  onCancel(): void{
    this.location.back();
  }

  private onSucess(){
    this._snackBar.open("Sucesso ao salvar curso.", "", {duration:5000});
    this.onCancel();
  }

  private onError(){
    this._snackBar.open("Erro ao salvar curso.", "", {duration:5000});
  }
}
