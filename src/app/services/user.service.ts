import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { API_BASE_URL } from '../shared/api-urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = API_BASE_URL;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);;
  }

  getUserById(bookId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${bookId}`);
  }
}
