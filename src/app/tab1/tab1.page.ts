import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items = [
    { name: 'book 1', catagery: 'science' },
    { name: 'book 2', catagery: 'science' },
    { name: 'book 3', catagery: 'science' },
    { name: 'book 4', catagery: 'science' },
    { name: 'book 5', catagery: 'science' },
    { name: 'book 6', catagery: 'science' },
    { name: 'book 7', catagery: 'science' }
  ]
  constructor() { }

}
