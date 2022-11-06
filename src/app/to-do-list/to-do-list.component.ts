import { Component, OnInit } from '@angular/core';
import { ToDosService } from '../to-dos.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor(private toDosService: ToDosService) { }

  ngOnInit(): void {
  }

}
