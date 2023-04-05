import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};
async function getFictionBooks() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=fiction",
    {
      cache: "no-store",
    }
  );
  const data = response.json();
  return data;
}

async function getNonFictionBooks() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=non-fiction",
    {
      cache: "no-store",
    }
  );
  const data = response.json();
  return data;
}
export default async function Parallel() {
  const fictionBooks = getFictionBooks();
  const nonFictionBooks = getNonFictionBooks();

  const [fiction, nonFiction] = await Promise.all([
    fictionBooks,
    nonFictionBooks,
  ]);
  return (
    <div>
      <h1>Fiction Books</h1>
      <ul>
        {fiction.map((book: Book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>

      <br />
      <h2>Non Fiction Books</h2>

      <ul>
        {nonFiction.map((book: Book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}
