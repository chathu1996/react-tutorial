import React from "react";
//css
import "./BookList.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
    </section>
  );
}

const author = "Alex Michaelides, Jack Hawkins";
const Book = () => {
  const title = "The Silent Patient";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/91RVshgQn1S._AC_UL320_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{6 + 6}</p>
    </article>
  );
};

export default BookList;
