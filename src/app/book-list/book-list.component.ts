import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!: Book[];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    // Fetch the list of books from the BookService
    this.bookService.getBooks().subscribe(
      (books: Book[]) => {
        this.books = books;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }

  viewBookDetails(bookId: number) {
    // Navigate to the book detail page
    this.router.navigate(['/book', bookId]);
  }
}
