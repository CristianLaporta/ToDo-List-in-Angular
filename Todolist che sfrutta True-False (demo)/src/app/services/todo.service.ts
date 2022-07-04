import { Injectable } from '@angular/core';
import { todo } from '../classi/todo';
import { Itodo } from '../interfacce/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public Todolist: Itodo[] = [];

  constructor() { }

  getTodoList(): Itodo[] {

    return this.Todolist;

  };

  removeTodo(remove: Itodo): void {
    let index = this.Todolist.indexOf(remove);
    this.Todolist.splice(index, 1);

  }
  removeTodoComplete(remove: Itodo): void {
    let index = this.Todolist.indexOf(remove);
    this.Todolist.splice(index, 1);

  }
  addTodo(add: Itodo): void {
    add.completed = false;
    add.id -= 1;
    this.Todolist.push(add);
  }

  cechTodo(cech: number,verify:number): void {

      this.Todolist[cech].completed = true;
    }
    
  }


