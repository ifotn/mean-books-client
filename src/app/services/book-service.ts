import { Injectable } from '@angular/core';

// add lib to make http calls to server api
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  
  // constructor: startup code of service.  Initiatlize HttpClient dependency so all methods can use
  constructor(private http: HttpClient) { }

  // get all
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4000/api/v1/books');
  }

  // post
  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:4000/api/v1/books', book);
  }
}
