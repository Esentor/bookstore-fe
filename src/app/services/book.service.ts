import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8080/bookstore/api/dao';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);;
  }

  getBookById(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/books/${bookId}`);
  }
}
