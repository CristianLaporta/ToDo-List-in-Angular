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
  title!: string;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.messaggio = "caricamento in corso...";
    setTimeout(() => { this.messaggio = "non ci sono ToDo."; this.todo = this.todoService.getTodoList(); }, 2000)
  }
  deleteTodos(elimina: Itodo): void {
    this.messaggioerase = "sto eliminando il ToDo...";
    setTimeout(() => { this.messaggioerase = ""; this.todoService.removeTodo(elimina); }, 2000)
  }
  cech(id: Itodo) {
    this.messaggioerase = "segno il ToDo come Completato...";
    setTimeout(() => { this.messaggioerase = ""; this.todoService.cechTodo(id); }, 2000)
  }
  togglemodify(id: string) {
    document.getElementById(id)!.classList.toggle("displaynone")
  }

}
