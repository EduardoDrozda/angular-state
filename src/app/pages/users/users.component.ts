import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from './models';
import { GET_ALL_USERS, IUserState } from './store';
import { SubSink } from 'subsink';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  private subs = new SubSink();

  users: IUser[] = [];
  users$: Observable<IUser[]>;


  constructor(private store: Store<IUserState>) { }

  ngOnInit(): void {
    this.setStoreSubscribe();
  }

  private setStoreSubscribe(): void {
    this.users$ = this.store.select(state => state.users);

    this.subs.sink = this
      .users$
      .pipe(map((users) => Object.keys(users).map(i => users[i])))
      .subscribe({ next: users => this.users = users });

    this.getAllUsers();
  }

  private getAllUsers(): void {
    this.store.dispatch(GET_ALL_USERS());
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
