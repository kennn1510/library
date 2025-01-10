const myLibrary = [];
const table = document.querySelector("table");

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
addBookToLibrary("Evil Joe", "Joe Buddy", 1, true);
addBookToLibrary("Happy Joe", "Bobby Joe", 10, false);

for (book of myLibrary) {
  const newRow = table.insertRow();
  for (data of Object.values(book)) {
    if (typeof data === "function") {
      continue;
    }
    const newCell = newRow.insertCell();
    newCell.textContent = data;
  }
}
