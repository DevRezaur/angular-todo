import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoTask: string = '';
  todoList: Todo[] = [];

  ngOnInit() {
    this.todoTask = '';
    this.todoList = [];
  }

  addTask() {
    if (this.todoTask !== '') {
      const newTask: Todo = {
        id: Date.now(),
        task: this.todoTask,
        isDone: false,
      };
      this.todoList.push(newTask);
    }
    this.todoTask = '';
  }

  deleteTask(id: number) {
    this.todoList = this.todoList.filter((task) => task.id !== id);
  }

  checkTask(id: number) {
    this.todoList.map((task) => {
      if (task.id === id) {
        task.isDone = true;
      }
    });
  }

  getTotalTodo(): number {
    let count = 0;

    this.todoList.map((task) => {
      if (task.isDone === false) {
        count++;
      }
    });

    return count;
  }

  getTotalFinished(): number {
    let count = 0;

    this.todoList.map((task) => {
      if (task.isDone === true) {
        count++;
      }
    });

    return count;
  }
}
