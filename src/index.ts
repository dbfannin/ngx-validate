import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateEngineService } from './engine/engine';


export { ValidateEngineService } from './engine/engine';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class NgxValidateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxValidateModule,
      providers: [ValidateEngineService]
    };
  }
}
