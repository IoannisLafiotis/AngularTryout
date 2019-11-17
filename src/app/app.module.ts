import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
// import { HeaderComponent } from './components/header/header.component';
// import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
     TodoComponent,
      TodoAddComponent,  TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
