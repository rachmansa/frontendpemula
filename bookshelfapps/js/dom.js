const UNCOMPLETED_LIST_BOOK_ID = "incompleteBookshelfList";
const COMPLETED_LIST_BOOK_ID = "completeBookshelfList"; 

function addBook() {
    const incompletedBookList = document.getElementById(UNCOMPLETED_LIST_BOOK_ID);

    const textBookTitle = document.getElementById("inputBookTitle").value;
    const textBookAuthor = document.getElementById("inputBookAuthor").value;
    const textBookYear = document.getElementById("inputBookYear").value;
    const textBookIsComplete = document.getElementById("inputBookIsComplete").checked;

    const book = createBook(textBookTitle, textBookAuthor, textBookYear,textBookIsComplete);
    incompletedBookList.append(book);

    
}

function createBook(textBookTitle, textBookAuthor, textBookYear){
    const bookTitle = document.createElement("h3");
    bookTitle.innerText = textBookTitle;

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = "Penulis: " + textBookAuthor;

    const bookYear = document.createElement("p");
    bookYear.innerText = "Tahun: " + textBookYear;

    const container = document.createElement("div");
    container.classList.add("action");
    container.append(createReadButton(), createDeleteButton());

    const section = document.createElement("article");
    section.classList.add("book_item");

    section.append(bookTitle, bookAuthor, bookYear);
    section.append(container);
   

    return section;
}

function createButton(buttonText, buttonColor, eventListener) {
    const button = document.createElement("button");
    button.innerText = buttonText;
    button.classList = buttonColor;
    button.addEventListener("click", function (event) {
        eventListener(event);
    });
    return button;
}

function createReadButton() {
    return createButton("Selesai Dibaca", "green",function(event){
         addBookToCompleted(event.target.parentElement);
    });
}

function createDeleteButton() {
    return createButton("Hapus Buku", "red",function(event){
      deleteBook(event.target.parentElement);
   });
}

function addBookToCompleted(bookElement) {
    const bookTitle = bookElement.querySelector(".book_item > h3").innerText;
    const bookAuthor = bookElement.querySelector(".book_item > p").innerText;
    const bookYear = bookElement.querySelector(".book_item > p").innerText;

    const newBook = createBook(bookTitle, bookAuthor, bookYear);
    const listCompleted = document.getElementById(COMPLETED_LIST_BOOK_ID);
    listCompleted.append(newBook);
    bookElement.remove();
} 

function deleteBook(bookElement) {
    bookElement.remove();
} 
