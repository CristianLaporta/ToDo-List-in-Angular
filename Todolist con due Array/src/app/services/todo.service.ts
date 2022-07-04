import { Injectable } from '@angular/core';
import { Itodo } from '../interfacce/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public Todolist: Itodo[] = [];
  public TodoMark: Itodo[] = [];
  constructor() { }

  getTodoList(): Itodo[] {

    return this.Todolist;

  };
  getTodoListComplete(): Itodo[] {

    return this.TodoMark;

  };
  removeTodo(remove: Itodo): void {
    let index = this.Todolist.indexOf(remove);
    this.Todolist.splice(index, 1);

  }
  removeTodoComplete(remove: Itodo): void {
    let index = this.TodoMark.indexOf(remove);
    this.TodoMark.splice(index, 1);

  }
  addTodo(add: Itodo): void {
    add.completed = false;
    add.id -= 1;
    this.Todolist.push(add);
  }

  cechTodo(task: Itodo): void {
    task.completed = true;
    this.TodoMark.push(task);
    let index = this.Todolist.indexOf(task);
    this.Todolist.splice(index, 1);
    console.log(this.Todolist)
    console.log(this.TodoMark)

  }

}
