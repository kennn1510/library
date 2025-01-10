const myLibrary = [];

function Book(title, author, pages, hasReadBook) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasReadBook = hasReadBook;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      hasReadBook ? "read already" : "not read yet"
    }`;
  };
}

function addBookToLibrary(title, author, pages, hasReadBook) {
  myLibrary.push(new Book(title, author, pages, hasReadBook));
}

addBookToLibrary("Angry Joe", "Joe Bobby", 100, false);
addBookToLibrary("Angry Joe", "Joe Bobby", 100, false);
addBookToLibrary("Angry Joe", "Joe Bobby", 100, false);

for (book of myLibrary) {
  console.log(book);
}
