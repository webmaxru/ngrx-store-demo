import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './shared/material.module';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './states/reducers';
import { MessageEffects } from './states/message.effects';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessageStatusComponent } from './message-status/message-status.component';
import { MessageToolbarComponent } from './message-toolbar/message-toolbar.component';

import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageSectionComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageStatusComponent,
    MessageToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    StoreModule.provideStore(reducers),
    EffectsModule.run(MessageEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
