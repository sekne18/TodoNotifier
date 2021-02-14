import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todo Notifier';
  todos: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTodos();
  } 

  getTodos() {
    this.http.get('https://localhost:5001/api/todos').subscribe(response =>  {
      this.todos = response;
    }, error => {
      console.log(error);
    })
  }

}
