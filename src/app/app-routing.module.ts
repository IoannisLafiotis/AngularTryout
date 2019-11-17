import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    data: { title: 'title of todos' }
  },
  {
    path: 'todo/add',
    component: TodoAddComponent,
    data: { title: 'add todo' }
  },
  {
    path: 'todo/edit/:id',
    component: TodoEditComponent,
    data: { title: 'edit todo' }
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule { }
