import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromCount from './store';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  }
];

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromCount.countFeatureKey, fromCount.counterReducer)
  ]
})
export class CounterModule { }
