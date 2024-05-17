import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoursesRoutingModule } from './courses-routing.module';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ErrorDialogComponent
  ]
})
export class CoursesModule { }
