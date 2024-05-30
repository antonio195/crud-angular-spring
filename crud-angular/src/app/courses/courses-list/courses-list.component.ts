import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { ActivatedRoute, Router } from '@angular/router';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CategoryPipe } from '../../shared/pipes/category.pipe';

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

  readonly displayedColumns = ["name", "category", "actions"];


  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){

  }
  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(["new"], {relativeTo: this.route});
  }

}
