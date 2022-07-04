import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/classi/todo';
import { Itodo } from 'src/app/interfacce/itodo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todoview',
  templateUrl: './todoview.component.html',
  styleUrls: ['./todoview.component.scss']
})
export class TodoviewComponent implements OnInit {
  messaggio: string = "";
  messaggioerase: string = "";
  todo!: Itodo[];
  verify!: number;
  title!: string;
  showModify: boolean = true;
  id: number = 0;
  completed: boolean = false;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.messaggio = "caricamento in corso...";
    setTimeout(() => {
      this.messaggio = "non ci sono ToDo."; this.todo = this.todoService.getTodoList();
      if (this.todoService.Todolist.length > 0) {
        this.messaggio = "";
      }
    }, 2000)

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
        this.completed = false;
        this.messaggio = "Sto aggiungendo il tuo ToDo..."

        setTimeout(() => {
          this.id  += 1;
          let todo2 = new todo(this.id, this.title, this.completed);
          this.messaggio = "";
          this.todoService.addTodo(todo2); this.cechtodo2()
          this.title = "";
        }, 2000)

        break
    }

  }

  deleteTodos(elimina: Itodo): void {
    this.messaggioerase = "sto eliminando il ToDo...";
    setTimeout(() => { this.messaggioerase = ""; this.todoService.removeTodo(elimina);  this.cechtodo2() }, 2000)
  }
  cech(id: number) {
    this.messaggioerase = "segno il ToDo come Completato...";
    setTimeout(() => { this.messaggioerase = ""; this.todoService.cechTodo(id); this.cechtodo2() }, 2000)

  }
  togglemodify(id: string) {
    document.getElementById(id)!.classList.toggle("displaynone")
  }
  cechtodo2() {
    if (this.id <= 1) {
      this.messaggioerase = "Non Ci sono Todo";
    }
    if (this.id >= 1) {
      this.messaggioerase = "";
    }
  }
}
