import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TOdoService } from './services/application.service'
import {TODOLIST} from '../app/interface/todo.types'
import { TodolistComponent } from "./todolist/todolist.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, TodolistComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayItem : TODOLIST [] = []
  
  constructor(private todo : TOdoService) {
    //First Way to solve the issue 
     
   //Second Way to solve the issue 
   fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => {
    if (!res.ok) {
      throw new Error('Returned th erro');
    }
    return res.json();
  })
  .then(res => console.log('Maneesh', res))
  .catch(err => console.log(err));
 
    const fetechData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json();
      console.log(data);
    }
    fetechData();
  }

  protected getData () {
    this.todo.getlist().subscribe( message => {
      this.displayItem = message;
      console.log("subscribe 1 ", this.displayItem);
    });
  }

  public search(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    console.log("Maneesh " + value);
    
  }

}
