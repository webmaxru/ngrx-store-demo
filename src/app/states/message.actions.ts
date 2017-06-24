import { Action } from '@ngrx/store';
import { Message } from './../models/message.model';

export const ADD = '[Message] Add';
export const SEARCH = '[Message] Search';
export const SEARCH_SUCCESS = '[Message] Search Success';


export class Add implements Action {
    readonly type = ADD;

    constructor(public payload: Message) { }
}

export class Search implements Action {
    readonly type = SEARCH;

    constructor(public payload: string) { }
}

export class SearchSuccess implements Action {
    readonly type = SEARCH_SUCCESS;

    constructor(public payload: Message[]) { }
}

export type All
    = Add
    | Search
    | SearchSuccess;