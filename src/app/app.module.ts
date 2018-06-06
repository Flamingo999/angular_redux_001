import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgReduxModule, NgRedux } from "ng2-redux";

import { AppComponent } from "./app.component";
import { IAppState, INITIAL_STATE, reducer } from "./redux";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(reducer, INITIAL_STATE);
  }
}
