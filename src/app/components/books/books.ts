import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';

// l8 imports
import { BookService } from '../../services/book-service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-books',
  imports: [FormsModule, CommonModule],
  templateUrl: './books.html'
})
export class Books {
  // create array of books to hold data returned from api
  BOOKS: Book[] = [];

  // component to manage single book
  book: Book = {
    title: '',
    year: 1000
  };

  // constructor: initialize service when component instatiated => Dependency Injection
  constructor(private bookService: BookService, private cdr: ChangeDetectorRef) {
    // fetch books onload
    this.getBooks();
  }

  // get books from api via service
  getBooks(): void {
    this.bookService.getBooks().subscribe((response) => {
      console.log(response);
      this.BOOKS = response;
      // ensure changes seen in ui
      this.cdr.detectChanges();
    });
  }

  saveBook(book: Book): void {
    if (!book._id) {
      // new book
      this.bookService.createBook(book).subscribe((response) => {
        // refresh page
        this.getBooks();
        this.clearForm();
      });
    }
    else {
      // edit existing book
      this.bookService.updateBook(book).subscribe((response) => {
        // refresh page
        this.getBooks();
        this.clearForm();
      });
    }   
  }

  deleteBook(_id: string): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(_id).subscribe((response) => {
         // refresh page
        this.getBooks();
        this.clearForm();
      });
    }
  }

  // select book when an item in list is clicked
  onSelect(selectedBook: Book): void {
    // make a "shallow" copy of the book so list not updated in realtime
    // ... is the "spread" operator in JS - references all properties of an object / array
    this.book = { ...selectedBook };
  }

  clearForm(): void {
    this.book.title = '';
    this.book.year = 1000;
    this.book._id = undefined;
  }
}
