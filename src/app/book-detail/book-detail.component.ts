import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book!: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      const id = +bookId; // Convert the string to a number
      this.bookService.getBookById(id).subscribe(
        (book: Book) => {
          this.book = book;
        },
        (error) => {
          console.error('Error fetching book details:', error);
        }
      );
    } else {
      console.error('Book ID not found in route parameters.');
    }
  }

  goBack() {
    this.router.navigate(['/books']); // Navigate back to the book list route
  }
}
