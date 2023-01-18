import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { TodoTaskDetailsComponent } from './components/todo-task-details/todo-task-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: TodoListComponent
  },
  {
    path: 'task',
    component: TodoTaskDetailsComponent,
    children: [
      {
        path: 'new',
        component: TodoTaskDetailsComponent
      },
      {
        path: ':id',
        component: TodoTaskDetailsComponent
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class TodoRoutingModule { }
