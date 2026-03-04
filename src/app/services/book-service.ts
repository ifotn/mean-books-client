import { Injectable } from '@angular/core';

// add lib to make http calls to server api
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // class level var holding server url for all methods
  serverUrl: string = environment.serverUrl;

  // constructor: startup code of service.  Initiatlize HttpClient dependency so all methods can use
  constructor(private http: HttpClient) { }

  // get all
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.serverUrl}/api/v1/books`);
  }

  // post
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.serverUrl}/api/v1/books`, book);
  }

  // delete
  deleteBook(_id: string): Observable<void> {
    return this.http.delete<void>(`${this.serverUrl}/api/v1/books/${_id}`);
  }

   // put
  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.serverUrl}/api/v1/books/${book._id}`, book);
  }
}
