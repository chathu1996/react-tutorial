import React from "react";
//css
import "./BookList.css";
//setup vars

const firstBook = {
  img: "https://m.media-amazon.com/images/I/91RVshgQn1S._AC_UL320_.jpg",
  title: "The Silent Patient",
  author: "Alex Michaelides, Jack Hawkins",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/91INn2ZEK+L._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL127_SR127,127_.jpg",
  title: "The Worst Best Friend: A Small",
  author: "Town Romance",
};

function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

export default BookList;
