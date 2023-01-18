import { Injectable } from '@angular/core';
import { Task } from '../types/task.type';
import { tasks, users } from './mockData';

@Injectable({
  providedIn: 'root'
})
export class TaskService {//По-любому с айдишкой некрасиво сделал, как было бы лучше?

  private randomId: number;
  private lastId: number;
  private max: number = 100;
  private min: number = 0;

  constructor() { }

  private checkRepeated(): number {
    this.randomId = this.getRandomIntNumber();
    for(let task of tasks) {
      if(Number(task.id) === this.randomId){
        this.checkRepeated();
      } else {
        return this.randomId;
      };
    }
    return this.randomId;
  }

  private getRandomIntNumber() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

  getTasks(): Promise<Task[]> {
    const tasksPromise = new Promise<Task[]>((resolve,reject) => {
      resolve(tasks);
    });
    return tasksPromise;
  }

  getTask(id: number): Promise<Task> {
    const task = tasks.find(task => task.id === id);
    const taskPromise = new Promise<Task>((resolve,reject) => {
      if(task) {
      resolve(task);
      }else {
        reject();
      }
    });
    return taskPromise;
  }

  addTasks(result: any): Promise<Task[]> {
    const addTaskPromise = new Promise<Task[]>((resolve, reject) => {
      this.lastId = this.checkRepeated();
        tasks.push({
        ...result,
        id: this.lastId,
        completed: false
      });
      resolve(tasks);
    });
    return addTaskPromise;
  }

  editTasks(taskID: number, result: any): Promise<Task[]> {//доделать
    const addTaskPromise = new Promise<Task[]>((resolve, reject) => {
      const taskIndex = tasks.findIndex(task => task.id === taskID);
      tasks.splice(taskIndex, 1);
      tasks.push({
        ...result,
        id: taskID,
        completed: false
      });
      resolve(tasks);
    });
    return addTaskPromise;
  }

  removeTasks(taskID: number): Promise<Task[]> {
    const addTaskPromise = new Promise<Task[]>((resolve, reject) => {
      const taskIndex = tasks.findIndex(task => task.id === taskID);
      tasks.splice(taskIndex, 1);
      resolve(tasks);
    });
    return addTaskPromise;
  }


  getUsers(): Promise<string[]> {
    const usersPromise = new Promise<string[]>((resolve,reject) => {
      resolve(users);
    })
    return usersPromise;
  }
}
