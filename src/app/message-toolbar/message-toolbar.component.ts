import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Message } from './../models/message.model';
import { MessageService } from './../services/message.service';

import { Store } from '@ngrx/store';
import * as ApplicationStore from './../states/reducers';

import * as MessageActions from './../states/message.actions';

@Component({
  selector: 'app-message-toolbar',
  templateUrl: './message-toolbar.component.html',
  styleUrls: ['./message-toolbar.component.css']
})
export class MessageToolbarComponent implements OnInit {

  searchString: string
  searchQuery$: Observable<string>;

  constructor(private store: Store<ApplicationStore.State>, private messageService: MessageService) { }

  ngOnInit() {
    this.searchQuery$ = this.store.select(ApplicationStore.selectSearchQuery)
  }

  searchMessages(searchString: string) {
    this.store.dispatch({
      type: MessageActions.SEARCH,
      payload: searchString
    });
  }

  searchMessagesNoEffects(searchString: string) {

    this.store.dispatch({
      type: MessageActions.SEARCH,
      payload: searchString
    });

    this.messageService.searchMessages(searchString)
      .subscribe(
      messages => {
        this.store.dispatch({
          type: MessageActions.SEARCH_SUCCESS,
          payload: messages
        });
      });
  }

}
