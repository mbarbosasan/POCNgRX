import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {appReducer} from "./app.state";
import {ReactiveFormsModule} from "@angular/forms";
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from "@angular/common/http";
import {AppEffects} from "./app.effects";
import {UsersService} from "./app.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({app: appReducer}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    ReactiveFormsModule,
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
