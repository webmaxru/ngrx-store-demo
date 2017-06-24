import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as ApplicationStore from './states/reducers';
import * as UiActions from './states/ui.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  testPanelOpen$: Observable<boolean>

  constructor(private store: Store<ApplicationStore.State>) { }

  ngOnInit() {
    this.testPanelOpen$ = this.store.select(ApplicationStore.selectIsTestPanelOpen);
  }

  sidenavToggle(sidenav) {
    if (sidenav.opened) {

      this.store.dispatch({
        type: UiActions.CLOSE_TEST_PANEL
      });

      sidenav.close()
    } else {

      this.store.dispatch({
        type: UiActions.OPEN_TEST_PANEL
      });

      sidenav.open()
    }

  }
}
