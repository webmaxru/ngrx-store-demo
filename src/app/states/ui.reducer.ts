import * as UiActions from './ui.actions';

export interface State {
  testPanelOpen: boolean
}

const initialState: State = {
  testPanelOpen: false
};

export function reducer(state = initialState, action: UiActions.All): State {
  switch(action.type) {
    case UiActions.CLOSE_TEST_PANEL: {
      return {
        testPanelOpen: false
      };
    }

    case UiActions.OPEN_TEST_PANEL: {
      return {
        testPanelOpen: true
      };
    }

    default: {
      return state;
    }
  }
}