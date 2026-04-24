// import { useEffect, useState } from "react";

import { Suspense } from "react";
import Book from "../pages/Book";

const Books = ({ data }) => {
  // const [allBooks, setAllBooks] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/ProgrammingHero1/book-vibe-resources/refs/heads/main/data/booksData.json",
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllBooks(data);
  //     });
  // }, []);
  return (
    <div className="mt-20 mb-10">
      <h2 className="font-bold text-[40px] text-center playfair-display mb-9">Books</h2>
      {/* <div>All Books: {allBooks.length}</div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Suspense fallback={<span>loading...</span>}>
          {data.map((singleBook) => (
            <Book singleBook={singleBook} key={singleBook.bookId} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
