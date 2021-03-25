import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import { GET_ALL_USERS, GET_ALL_USERS_SUCCESS } from './user-actions';

@Injectable()
export class UserEffects {

  loadUsers$: CreateEffectMetadata;

  constructor(
    private actions$: Actions,
    private userService: UsersService
  ) {
    this.createEffect();
  }

  private createEffect(): void {

    this.loadUsers$ = createEffect(() => this.actions$.pipe(
      ofType(GET_ALL_USERS),
      mergeMap(() => this.userService.getAll()
        .pipe(
          map(users => GET_ALL_USERS_SUCCESS({ users })),
          catchError(() => EMPTY)
        ))
    ));

  }
}
