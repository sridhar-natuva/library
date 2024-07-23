import { Component, inject } from '@angular/core';
import { BooksStore } from '../books.store';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  readonly store = inject(BooksStore);
  constructor() { }

}
