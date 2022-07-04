import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagine/pagenotfound/pagenotfound.component';
import { TodolistCompletoComponent } from './pagine/todolist-completo/todolist-completo.component';
import { TodolistComponent } from './pagine/todolist/todolist.component';

const routes: Routes = [
  {path: '', component: TodolistComponent },
  {path: 'completed', component: TodolistCompletoComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
