import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  @Input()
  i: number;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo): void {
    this.todoDelete.emit(todo);
    console.log('delete buttton is triggered');
  }

  onCheckboxClick(todo: Todo): void {
    this.todoCheckbox.emit(todo);
    // if (todo.active === true) {
    //   todo.active = false;
    // }else{
    //   todo.active = true;
    // }
  }

}
