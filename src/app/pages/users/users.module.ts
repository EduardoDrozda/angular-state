import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store';
import { StoreModule } from '@ngrx/store';
import * as fromUsers from './store';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(fromUsers.usersFeatureKey, fromUsers.usersReducer)
  ]
})
export class UsersModule { }
