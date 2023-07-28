import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookDetailComponent], // Include BookListComponent here
  imports: [BrowserModule, AppRoutingModule, CommonModule, RouterModule, HttpClientModule], // Include CommonModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
