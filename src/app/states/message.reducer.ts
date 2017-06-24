import { Message } from './../models/message.model';
import * as MessageActions from './message.actions';

export interface State {
  items: Message[],
  searchQuery: string
}

const initialState: State = {
  items: [],
  searchQuery: 'ngrx'
};

export function reducer(state = initialState, action: MessageActions.All): State {
  switch(action.type) {
    case MessageActions.ADD: {
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    }

    case MessageActions.SEARCH: {
      return {
        ...state,
        searchQuery: action.payload
      };
    }

    case MessageActions.SEARCH_SUCCESS: {
      return {
        ...state,
        items: state.items.concat(action.payload)
      };
    }

    default: {
      return state;
    }
  }
}