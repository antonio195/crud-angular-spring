import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [
    AppMaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  selectedCourse = "";

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ){
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {

  }

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
