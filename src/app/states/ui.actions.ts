import { Action } from '@ngrx/store';

export const CLOSE_TEST_PANEL = '[UI] Close Test Panel';
export const OPEN_TEST_PANEL = '[UI] Open Test Panel';


export class CloseTestPanel implements Action {
    readonly type = CLOSE_TEST_PANEL;
}

export class OpenTestPanel implements Action {
    readonly type = OPEN_TEST_PANEL;
}

export type All
    = CloseTestPanel
    | OpenTestPanel;