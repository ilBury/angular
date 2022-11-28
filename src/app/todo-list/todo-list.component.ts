import { Component, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskFormDialogComponent } from '../task-form-dialog/task-form-dialog.component';
import { Task } from '../types/task.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public taskList: Task[] = [];
  public newTask: string;
  public editing: boolean;

  private editedTaskId: number = 0; 
  private lastId: number = 0;
  private users: string[] = ["John", "Alex", "Bob"];

  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
    ) {}

  @HostListener('window:keyup.enter')
  showNotification(): void {
    this._snackBar.open('task has been created', '', {
      duration: 3 * 100,
    });
  }

  addTask(): void {
/*     if(this.newTask) {
      this.taskList.push({title: this.newTask, id: ++this.lastId, completed: false});
      this.newTask = '';
      this.showNotification();
    } */
    const dialogRef = this.dialog.open(TaskFormDialogComponent, {
      width: '600px',
      data: {users: this.users}
    });

    dialogRef.afterClosed().subscribe(result => {

    });

  }

  removeTask(taskId: number): void {
    const taskIndex = this.taskList.findIndex(task => task.id === taskId);
    this.taskList.splice(taskIndex, 1);

  }

  editTask(taskId: number):void {
    this.editedTaskId = taskId;
    this.editing = true;
    this.newTask = this.taskList.find(task => task.id === taskId).title;

  }

  saveChanges(): void {
    this.taskList.find(task => task.id === this.editedTaskId).title = this.newTask;
    this.cancel();
  }

  cancel(): void {
    this.editing = false;
    this.newTask = '';
    this.editedTaskId = null;
  }
}
