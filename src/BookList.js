import React from "react";
//css
import './BookList.css'

function BookList() {
  return (
    <section className="bookList">
      <Book />
    </section>
  );
}

const Book = () => {
    const title = "The Silent Patient";
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Title = () => <h1> The Silent Patient</h1>;

const Author = () => <h4>Alex Michaelides, Jack Hawkins</h4>;

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/91RVshgQn1S._AC_UL320_.jpg"
    alt=""
  />
);

export default BookList;
