import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMaterialModule } from '../../../shared/app-material/app-material.module';
import { CategoryPipe } from '../../../shared/pipes/category.pipe';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [
    AppMaterialModule,
    CategoryPipe
  ],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit {

  @Input() courses: Course[] = [];
  @Output() addCourse = new EventEmitter(false);
  @Output() editCourse = new EventEmitter(false);
  @Output() removeCourse = new EventEmitter(false);

  readonly displayedColumns = ["name", "category", "actions"];

  constructor(){}

  ngOnInit(): void {}

  onAdd(){
    this.addCourse.emit(true);
  }

  onEdit(course: Course){
    this.editCourse.emit(course);
  }

  onRemove(course: Course){
    this.removeCourse.emit(course);
  }
}
