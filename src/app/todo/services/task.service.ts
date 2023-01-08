import { Injectable } from '@angular/core';
import { Task } from '../types/task.type';
import { tasks, users } from './mockData';

@Injectable({
  providedIn: 'root'
})
export class TaskService {//По-любому с айдишкой некрасиво сделал, как было бы лучше?

  private randomId: number;
  private lastId: number = this.checkRepeated();

  constructor() { }

  checkRepeated(): number {
    this.randomId = this.getRandomIntNumber(1,100);
    for(let task of tasks) {
      if(Number(task.id) === this.randomId){
        this.checkRepeated();
      } else {
        return this.randomId;
      };
    }
    return this.randomId;
  }

  getRandomIntNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getTasks(): Promise<Task[]> {
    const tasksPromise = new Promise<Task[]>((resolve,reject) => {
      resolve(tasks);
    });
    return tasksPromise;
  }

  addTasks(result: any): Promise<Task[]> {
    const addTaskPromise = new Promise<Task[]>((resolve, reject) => {
        tasks.push({
        ...result,
        id: this.lastId,
        completed: false
      });
      resolve(tasks);
    });
    return addTaskPromise;
  }

  editTasks(taskIndex: any, result: any): Promise<Task[]> {//доделать
    const addTaskPromise = new Promise<Task[]>((resolve, reject) => {
      tasks.splice(taskIndex, 1);
      tasks.push({
        ...result,
        id: taskIndex,
        completed: false
      });
      resolve(tasks);
    });
    return addTaskPromise;
  }

  removeTasks(taskIndex: any): Promise<Task[]> {
    const addTaskPromise = new Promise<Task[]>((resolve, reject) => {
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
