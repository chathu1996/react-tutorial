import React from "react";
//css
import "./BookList.css";
//setup vars

const books = [
  {
    img: "https://m.media-amazon.com/images/I/91RVshgQn1S._AC_UL320_.jpg",
    title: "The Silent Patient",
    author: "Alex Michaelides, Jack Hawkins",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/91INn2ZEK+L._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL127_SR127,127_.jpg",
    title: "The Worst Best Friend: A Small",
    author: "Town Romance",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default BookList;
