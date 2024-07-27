import { Component, inject } from '@angular/core';
import { BooksStore } from '../books.store';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  readonly store = inject(BooksStore);
  constructor() { }

}
