import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { StoreModule } from '@ngrx/store';
import { loaderFeatureKey, loaderReducer } from './store/loader';
import { EffectsModule } from '@ngrx/effects';

const components = [
  LoaderComponent
];

const modules = [
  StoreModule.forRoot({ [loaderFeatureKey]: loaderReducer }),
  EffectsModule.forRoot([]),
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...components
  ],
})
export class SharedModule { }
