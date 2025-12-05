const genreFilter = document.getElementById("genreFilter"); // Select Genre Select Box
const searchBox = document.getElementById("search");

const bookContainer = document.querySelector(".books-container");

const booksArray = [
  {
    title: "Mg MuPaing Shin",
    author: "မြေ့",
    img: "book1.jpg",
    genre: "romance",
    genreText: "Romance",
    price: 8000,
  },
  {
    title: "Important For Business",
    author: "အောင်ကိုဦး",
    img: "book2.jpg",
    genre: "business",
    genreText: "Business",
    price: 10000,
  },
  {
    title: "Say Yes to YourSelf",
    author: "နေထွန်းလင်း",
    img: "book3.jpg",
    genre: "motivation",
    genreText: "Motivation",
    price: 10000,
  },
  {
    title: "Pearls of My Heart",
    author: "Vitale",
    img: "book4.jpg",
    genre: "romance",
    genreText: "Romance",
    price: 5000,
  },
  {
    title: "Create Your Own Business",
    author: "James MorDor",
    img: "book5.jpg",
    genre: "business",
    genreText: "Business",
    price: 5000,
  },
  {
    title: "My Depression Diary",
    author: "စူးရှမေ",
    img: "book6.jpg",
    genre: "motivation",
    genreText: "Motivation",
    price: 10000,
  },
  {
    title: "Nyo",
    author: "Hann",
    img: "book7.jpg",
    genre: "romance",
    genreText: "Romance",
    price: 7000,
  },
  {
    title: "Entrepreneurship",
    author: "ပြည်ံ့ဖြိုးမောင်",
    img: "book8.jpg",
    genre: "business",
    genreText: "Business",
    price: 10000,
  },
  {
    title: "The Anxious Generation",
    author: "Jonathan Haidt",
    img: "book9.jpg",
    genre: "motivation",
    genreText: "Motivation",
    price: 8000,
  },
  {
    title: "The Happiest on the earth",
    author: "Eddie Jaku",
    img: "book10.jpg",
    genre: "business",
    genreText: "Business",
    price: 8000,
  },
  {
    title: "Hyper Focus",
    author: "Chris Bailey",
    img: "book11.jpg",
    genre: "motivation",
    genreText: "Motivation",
    price: 9000,
  },
  {
    title: "Love is gone",
    author: "nyan",
    img: "book1.jpg",
    genre: "motivation",
    price: 10000,
  },
];

function generateBookCard() {
  booksArray.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-genre", `${book.genre}`);
    bookCard.innerHTML = ` 
        <img src="Images/${book.img}" alt="" />
        <div class="text-container">
          <p id="book-name">${book.title}</p>
          <p>Author: ${book.author}</p>
          <p>Genre: ${book.genreText}</p>
          <p>Price: ${book.price} MMK</p>
          <a href="#">Buy</a>
        </div>
    `;

    bookContainer.appendChild(bookCard);
  });
}

generateBookCard();

genreFilter.addEventListener("change", function () {
  const selectGenre = this.value;
  // console.log(selectGenre);
  const books = document.querySelectorAll(".book-card"); // Select All contains book card class
  books.forEach(function (book) {
    // console.log(book);
    const genre = book.getAttribute("data-genre");
    // console.log(genre);
    book.style.display =
      selectGenre === "all" || selectGenre === genre ? "block" : "none";
  });
});

searchBox.addEventListener("change", function () {
  const searchValue = this.value.toLowerCase();
  // console.log(searchValue);
  const bookNames = document.querySelectorAll("#book-name");
  bookNames.forEach(function (bookName) {
    if (bookName.textContent.toLowerCase().indexOf(searchValue) !== -1) {
      bookName.parentElement.parentElement.style.display = "block";
    } else {
      bookName.parentElement.parentElement.style.display = "none";
    }
  });
});
