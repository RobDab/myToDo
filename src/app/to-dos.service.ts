import { Injectable } from "@angular/core";
import { ToDo } from "./to-do";


@Injectable({
  providedIn: 'root'
})


export class ToDosService{

  toDoList: ToDo[] = []

  constructor() { }

  addToDo(obj: ToDo){
    
  }

  getToDo(id: number){

  }

  deleteToDo(id: number){

  }

  modifyToDo(id: number){

  }
}
