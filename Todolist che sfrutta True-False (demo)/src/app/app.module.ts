import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './pagine/todolist/todolist.component';
import { TodolistCompletoComponent } from './pagine/todolist-completo/todolist-completo.component';
import { PagenotfoundComponent } from './pagine/pagenotfound/pagenotfound.component';
import { TodohomeComponent } from './componenti/todo/todohome.component';
import { TodocompleteComponent } from './componenti/todocomplete/todocomplete.component';
import { FormsModule } from '@angular/forms';
import { TodoviewComponent } from './componenti/todoview/todoview.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolistCompletoComponent,
    PagenotfoundComponent,
    TodohomeComponent,
    TodocompleteComponent,
    TodoviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
