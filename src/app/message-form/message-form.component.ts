import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Message } from './../models/message.model';

import { Store } from '@ngrx/store';
import * as ApplicationStore from './../states/reducers';

import * as MessageActions from './../states/message.actions';
import * as UiActions from './../states/ui.actions';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  message: Message = <Message>{};

  constructor(private store: Store<ApplicationStore.State>) {
  }

  ngOnInit() {
  }

  messageFormSubmit(messageForm: any) {

    if (messageForm.valid) {

      this.store.dispatch({
        type: MessageActions.ADD,
        payload: {
            author: messageForm.value.author,
            text: messageForm.value.text,
            createdAt: new Date()
        }
      });

      messageForm.reset()

    }

  }

}
