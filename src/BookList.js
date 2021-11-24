import React from "react";
//css
import "./BookList.css";
//setup vars

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/91RVshgQn1S._AC_UL320_.jpg",
    title: "The Silent Patient",
    author: "Alex Michaelides, Jack Hawkins",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/91INn2ZEK+L._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL127_SR127,127_.jpg",
    title: "The Worst Best Friend: A Small",
    author: "Town Romance",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/31cPj2sYgIS._AC_SX184_.jpg",
    title: "Dwyane",
    author: "Dwyane Wade",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  //attribute, eventHandler
  //onClick, onMouseOver

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title );
      }}
    >
      <img src={img} alt="" />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click me
      </button>
      <button type="button" onClick={complexExample(author)}>
        More COmple Example
      </button>
    </article>
  );
};

export default BookList;
