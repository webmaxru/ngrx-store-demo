import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as ApplicationStore from './../states/reducers';

@Component({
  selector: 'app-message-status',
  templateUrl: './message-status.component.html',
  styleUrls: ['./message-status.component.css']
})
export class MessageStatusComponent implements OnInit {

  messagesNumber$: Observable<number>

  constructor(private store: Store<ApplicationStore.State>) { }

  ngOnInit() {
    this.messagesNumber$ = this.store.select(ApplicationStore.selectMessagesNumber);
  }

}
