import { Component, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { TaskService } from '../../services/task.service';
import { Task } from '../../types/task.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public taskList: Task[];
  public newTask: string;
  public editing: boolean;
  private editedTaskId: number;
  private users: string[];

  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    this.taskList = await this.taskService.getTasks();
    this.users =  await this.taskService.getUsers();
  }

 // @HostListener('window:keyup.enter')
  showNotification(): void {
    this._snackBar.open('Task has been created', '', {
      duration: 3 * 1000,
    });
  }

  addTask(): void {
    this.router.navigate(['task', 'new'], {relativeTo: this.activatedRoute.parent});
  /*   const dialogRef = this.dialog.open(TaskFormDialogComponent, {
      width: '600px',
      data: { users: this.users },
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        this.taskList = await this.taskService.addTasks(result);
      }
    }); */
  }

  async removeTask(taskId: number): Promise<void> {

    const taskID = this.taskList.find(task => task.id === taskId);

    this.taskList = await this.taskService.removeTasks(taskID.id);
  }

  editTask(taskId: number): void {
    this.router.navigate(['task', taskId], {relativeTo: this.activatedRoute.parent});
    let task = this.taskList.find(task => task.id === taskId);
 /*    const dialogRef = this.dialog.open(TaskFormDialogComponent, {
      width: '600px',
      data: { task, users: this.users },
    });

    dialogRef.afterClosed().subscribe(async result => {
      if (result) {
        const taskInd = this.taskList.findIndex(task => task.id === taskId);
        this.taskList = await this.taskService.editTasks(taskInd, result);
      }
    }); */
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
