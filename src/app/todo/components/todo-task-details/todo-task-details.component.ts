import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { TitleValidator } from '../../shared/validators/titleValidator';
import { Task } from '../../types/task.type';

@Component({
  selector: 'app-todo-task-details',
  templateUrl: './todo-task-details.component.html',
  styleUrls: ['./todo-task-details.component.scss']
})
export class TodoTaskDetailsComponent implements OnInit {

  public taskForm = this.fb.group({
    title: new FormControl<string>(null, [Validators.required, TitleValidator.titleValidator(/[A-Z]{1}[a-z0-9\s]{2,30}\./)]),
    description: new FormControl<string>(null, [Validators.maxLength(50)]),
    assignee: new FormControl<string>(null, [Validators.required]),
    isUrgent: new FormControl<boolean>(null),
  });

  public users: string[];
  public title: string;

  private taskId: number;
  private task: Task;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.activatedRoute.firstChild.params.subscribe(async params => {

        this.taskId = params['id'];
        if(this.taskId) {
          this.task = await this.taskService.getTask(+this.taskId);
          this.setFormValue();
        }
        this.title = this.taskId ? 'Edit task' : 'Create task'
    });
    this.users = await this.taskService.getUsers();
  }



  goBack(): void {
    this.router.navigate(['/todo']);
  }

  save(): void {
    if(this.taskId) {
      console.log(this.taskForm.getRawValue(), this.taskId);
      this.taskService.editTasks(+this.taskId, this.taskForm.getRawValue());
    } else {
      this.taskService.addTasks(this.taskForm.getRawValue());
    }
    this.router.navigate(['/todo']);
  }

  private setFormValue(): void {
    this.taskForm.setValue({
      title: this.task.title,
      description: this.task.description || null,
      isUrgent: this.task.isUrgent,
      assignee: this.task.assignee
    });

  }
}
