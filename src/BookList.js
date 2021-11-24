import React from "react";
//css
import "./BookList.css";
import { books } from "./Books";
import Book from "./Book"
import {greeting} from './Testing/Testing'

function BookList() {
  console.log(greeting);
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}



export default BookList;
