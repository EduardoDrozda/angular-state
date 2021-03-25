import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://5d5f3692841f7f00140e394d.mockapi.io/api/participantes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this
      .http
      .get<IUser[]>(this.apiUrl);
  }
}
