import { Component, OnInit } from '@angular/core';
import { todo } from 'src/app/classi/todo';
import { Itodo } from 'src/app/interfacce/itodo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todocomplete',
  templateUrl: './todocomplete.component.html',
  styleUrls: ['./todocomplete.component.scss']
})

export class TodocompleteComponent implements OnInit {
  messaggio: string = "";
  messaggioerase:string = "";
  todo!: Itodo[];
  verifycech:number = 1;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.messaggio = "caricamento in corso...";
    setTimeout(() => { this.messaggio = "Non hai completato nessun ToDo! Che aspetti?"; this.todo = this.todoService.getTodoList() ; }, 2000)
  }

  deleteTodos(elimina: Itodo): void {
    this.messaggioerase = "Sto eliminando la ToDo...";
    this.messaggio = "caricamento in corso...";
    setTimeout(() => {  this.messaggioerase = ""; this.todoService.removeTodoComplete(elimina); this.messaggio = "Non hai completato nessun ToDo! Che aspetti?"; }, 2000)
  }
}