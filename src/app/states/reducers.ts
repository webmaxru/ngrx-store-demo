import * as MessageReducer from './message.reducer';
import * as UiReducer from './ui.reducer';

export interface State {
  messages: MessageReducer.State,
  ui: UiReducer.State;
}

export const reducers = {
  messages: MessageReducer.reducer,
  ui: UiReducer.reducer
};

export function selectMessages(state: State) {
  return state.messages.items
}

export function selectMessagesNumber(state: State) {
  return state.messages.items.length
}

export function selectSearchQuery(state: State) {
  return state.messages.searchQuery
}

export function selectIsTestPanelOpen(state: State) {
  return state.ui.testPanelOpen
}