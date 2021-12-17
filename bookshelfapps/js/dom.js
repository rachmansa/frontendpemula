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
    bookAuthor.innerHTML = `Penulis: <span id="author">` + textBookAuthor + `</span>`;

    const bookYear = document.createElement("p");
    bookYear.innerHTML = `Tahun: <span id="year">` + textBookYear + `</span>`;

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
         addBookToCompleted(event.target.parentElement.parentElement);
    });
}

function createDeleteButton() {
    return createButton("Hapus Buku", "red",function(event){
      deleteBook(event.target.parentElement);
   });
}

function addBookToCompleted(bookElement) {
    const listCompleted = document.getElementById(COMPLETED_LIST_BOOK_ID);
 
    const taskTitle = bookElement.querySelector("h3").innerText;
    const taskAuthor = bookElement.querySelector("span#author").innerText;
    const taskYear = bookElement.querySelector("span#year").innerText;

    const newBook = createBook(taskTitle, taskAuthor, taskYear);
    listCompleted.append(newBook);
    bookElement.remove();
} 

function deleteBook(bookElement) {
    bookElement.remove();
} 
