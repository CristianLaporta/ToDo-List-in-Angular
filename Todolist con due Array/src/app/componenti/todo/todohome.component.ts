import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/classi/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todohome',
  templateUrl: './todohome.component.html',
  styleUrls: ['./todohome.component.scss']
})
export class TodohomeComponent implements OnInit {
  id: number = 0;
  title!: string;
  completed: boolean = false;
  messaggio:string = "";
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  addTodo(): void {
    switch (this.title) {
      case undefined:
        alert("inserisci un ToDo!");
        break;
      case "":
        alert("se vuoi aggiungere una nuova ToDo alla tua lista devi scrivermi qualcosa!")
        break;
      default:
        this.id = this.todoService.Todolist.length + 1;
        let todo2 = new todo(this.id, this.title, this.completed);
        this.messaggio = "Sto aggiungendo il tuo ToDo..."
        setTimeout(() => {  this.messaggio = ""; this.todoService.addTodo(todo2); }, 2000)
        this.title = "";
        this.completed = false;
        break
    }
    
  }
  
}

