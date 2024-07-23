import { Component, inject } from '@angular/core';
import { UserStore } from '../user.store';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  readonly store = inject(UserStore);
  constructor() { }

}
