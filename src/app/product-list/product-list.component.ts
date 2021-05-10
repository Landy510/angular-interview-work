import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Todos } from '../Todos';
import { newObj } from '../Todos';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  Todos = Todos;
  newTodo: string = '';
  removeTodo(item) {
    let resultIndex = this.Todos.findIndex(
      (el, index) => el.title === item.title
    );
    this.Todos.splice(resultIndex, 1);
  }
  addItem() {
    let item: newObj = { title: this.newTodo, completed: false };
    this.Todos.push(item);
  }
  doneTyping($event) {
    if ($event.which === 13) {
      let item: newObj = { title: this.newTodo, completed: false };
      this.Todos.push(item);
      this.newTodo = '';
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
