import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { MessageService } from './../services/message.service';
import * as MessageActions from './message.actions';

@Injectable()
export class MessageEffects {
  @Effect()
  search$: Observable<Action> = this.actions$.ofType(MessageActions.SEARCH)
    .map((action: MessageActions.Search) => action.payload)
    .switchMap(searchQuery => this.messageService.searchMessages(searchQuery))
    .map(results => new MessageActions.SearchSuccess(results));
    
  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}
}