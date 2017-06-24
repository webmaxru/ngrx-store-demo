import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Message } from './../models/message.model';

import { Store } from '@ngrx/store';
import * as ApplicationStore from './../states/reducers';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages$: Observable<Message[]>;

  constructor(private store: Store<ApplicationStore.State>) { }

  ngOnInit() {
    this.messages$ = this.store.select(ApplicationStore.selectMessages)
  }

}
