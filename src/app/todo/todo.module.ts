import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';
import { TaskFormDialogComponent } from './components/task-form-dialog/task-form-dialog.component';
import { DelSpaceDirective } from './directives/del-space.directive';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatOptionModule } from "@angular/material/core";
import {MatExpansionModule} from '@angular/material/expansion';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoTaskDetailsComponent } from './components/todo-task-details/todo-task-details.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    TodoListComponent,
    TodoTaskComponent,
    TaskFormDialogComponent,
    DelSpaceDirective,
    TodoTaskDetailsComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatExpansionModule,
    MatProgressBarModule
  ],
  exports: [],
  providers: []
})
export class TodoModule { }
