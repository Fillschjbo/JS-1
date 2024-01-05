const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];

const bookContainer = document.querySelector(".book-container");
console.log(bookContainer);

let html = "";

const totalBooks = books.length;
console.log(totalBooks);

for(let i = 0; i < totalBooks; i++) {
html += `
      <div class="container">
        <p>Title: ${books[i].title}</p>
        <p>Author ${books[i].author}</p>
        <p>Availability: ${books[i].available ? "this book is available" : "this book is not available"}</p>
      <div/>
`
    console.log(html);
    bookContainer.innerHTML = html;
}