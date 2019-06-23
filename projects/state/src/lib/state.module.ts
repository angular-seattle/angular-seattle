import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppStateService } from './app.state.service';

@NgModule({
  imports: []
})
export class StateModule {
  /**
   * The StateModule is responsible for tracking the global state of the application
   * As such use the `forRoot()` pattern to ensure that the AppStateService is only injected
   * at the root of the app
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [AppStateService]
    };
  }
}
