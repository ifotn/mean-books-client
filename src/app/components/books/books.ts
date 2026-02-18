import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// define Book class that will be used by view
export class Book {
  _id: string | undefined;
  title: string | undefined;
  year: number | undefined;
}

@Component({
  selector: 'app-books',
  imports: [FormsModule],
  templateUrl: './books.html'
})
export class Books {
  // create in-memory array of books
  BOOKS: Book[] = [
    { _id: 'abc123', title: 'Adrift', year: 2023 },
    { _id: 'def456', title: 'A Long Way Down', year: 2006 },
    { _id: 'ghi789', title: 'High Fidelity', year: 1995 }
  ];

  // component to manage single book
  book: Book | undefined;

  // select book when an item in list is clicked
  onSelect(selectedBook: Book): void {
    this.book = selectedBook;
  }

  clearForm(): void {
    this.book = undefined;
  }
}
