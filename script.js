const myLibrary = [];
const table = document.querySelector("table");
const newBookButton = document.querySelector("#new-book-btn");
const form = document.querySelector("form");
const dialog = document.querySelector("dialog");
const submit = document.querySelector("input[type='submit']");

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

newBookButton.addEventListener("click", () => {
  dialog.showModal();
});

submit.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    console.log(form["title"].value);
    addBookToLibrary(
      form["title"].value,
      form["author"].value,
      form["pages"].value,
      form["has-read-book"].value
    );
    updateDisplay();
  },
  false
);
function displayBooks() {
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
}
displayBooks();
function updateDisplay() {
  const newRow = table.insertRow();
  for (data of Object.values(myLibrary[myLibrary.length - 1])) {
    if (typeof data === "function") {
      continue;
    }
    const newCell = newRow.insertCell();
    newCell.textContent = data;
  }
}
