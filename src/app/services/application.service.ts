
import { Observable  } from 'rxjs';
import {TODOLIST} from '../interface/todo.types'
import { } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TOdoService {

    private url = 'https://jsonplaceholder.typicode.com/todos';
    constructor( private http: HttpClient) {
    }
    
   getlist(): Observable<TODOLIST[]> {
    return this.http.get<TODOLIST[]>("https://jsonplaceholder.typicode.com/todos")
} 
}

