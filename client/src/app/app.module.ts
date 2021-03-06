import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TodoComponent } from './todo/todo.component';
import { NotesComponent } from './notes/notes.component';
import { HomeComponent } from './home/home.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component'; 
import { MDBBootstrapModule } from 'angular-bootstrap-md';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CalendarComponent,
    TodoComponent,
    NotesComponent,
    HomeComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
