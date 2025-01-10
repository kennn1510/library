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
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());
