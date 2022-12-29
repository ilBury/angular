import { Injectable } from '@angular/core';
import { Task } from '../types/task.type';
import { tasks, users } from './mockData';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }


  getTasks(): Promise<Task[]> {
    const tasksPromise = new Promise<Task[]>((resolve,reject) => {
      resolve(tasks);
    });
    return tasksPromise;
  }

  getUsers(): Promise<string[]> {
    const usersPromise = new Promise<string[]>((resolve,reject) => {
      resolve(users);
    })
    return usersPromise;
  }
}
