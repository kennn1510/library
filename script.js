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
  this.hasReadBook = document.createElement("button");
  this.hasReadBook.innerText = hasReadBook;
  this.hasReadBook.addEventListener("click", () => {
    this.hasReadBook.innerText = !(this.hasReadBook.innerText === "true");
  });
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      hasReadBook ? "read already" : "not read yet"
    }`;
  };
  this.delete = document.createElement("button");
  this.delete.innerText = "Delete";
  this.delete.addEventListener("click", (e) => {
    let clickedButton = e.target;
    clickedButton.closest("tr").remove();
  });
}

function addBookToLibrary(title, author, pages, hasReadBook) {
  myLibrary.push(new Book(title, author, pages, hasReadBook));
}

newBookButton.addEventListener("click", () => {
  dialog.showModal();
});

addBookToLibrary("Angry Joe", "Joe Bobby", 100, false);
addBookToLibrary("Evil Joe", "Joe Buddy", 1, true);
addBookToLibrary("Happy Joe", "Bobby Joe", 10, false);

submit.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary(
    form["title"].value,
    form["author"].value,
    form["pages"].value,
    form["has-read-book"].checked
  );

  updateDisplay();
});
function displayBooks() {
  for (book of myLibrary) {
    const newRow = table.insertRow();
    for (data of Object.values(book)) {
      if (typeof data !== "function") {
        const newCell = newRow.insertCell();
        if (typeof data === "object") {
          newCell.insertAdjacentElement("beforeend", data);
        } else {
          newCell.textContent = data;
        }
      }
    }
  }
}
displayBooks();

function updateDisplay() {
  const newRow = table.insertRow();
  for (data of Object.values(myLibrary[myLibrary.length - 1])) {
    if (typeof data !== "function") {
      const newCell = newRow.insertCell();
      if (typeof data === "object") {
        newCell.insertAdjacentElement("beforeend", data);
      } else {
        newCell.textContent = data;
      }
    }
  }
}
