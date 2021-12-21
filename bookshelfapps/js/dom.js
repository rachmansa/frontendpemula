const UNCOMPLETED_LIST_BOOK_ID = "incompleteBookshelfList";
const COMPLETED_LIST_BOOK_ID = "completeBookshelfList"; 

function addBook() {
    const listCompleted = document.getElementById(COMPLETED_LIST_BOOK_ID);
    const incompletedBookList = document.getElementById(UNCOMPLETED_LIST_BOOK_ID);

    const textBookTitle = document.getElementById("inputBookTitle").value;
    const textBookAuthor = document.getElementById("inputBookAuthor").value;
    const textBookYear = document.getElementById("inputBookYear").value;
    const textBookIsComplete = document.getElementById("inputBookIsComplete").checked;
    const book = createBook(textBookTitle, textBookAuthor, textBookYear,textBookIsComplete);

    if(textBookIsComplete){
        listCompleted.append(book);
    } else {
        incompletedBookList.append(book);
    }
}

function createBook(textBookTitle, textBookAuthor, textBookYear, isCompleted){
    const bookTitle = document.createElement("h3");
    bookTitle.innerText = textBookTitle;

    const bookAuthor = document.createElement("p");
    bookAuthor.innerHTML = `Penulis: <span id="author">` + textBookAuthor + `</span>`;

    const bookYear = document.createElement("p");
    bookYear.innerHTML = `Tahun: <span id="year">` + textBookYear + `</span>`;

    const container = document.createElement("div");
    container.classList.add("action");
    console.log(isCompleted);

    if(isCompleted){
        container.append(createUnfinishedReadButton(), createDeleteButton());
    } else {
        container.append(createReadButton(), createDeleteButton());
    }
    
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

function createUnfinishedReadButton() {
    return createButton("Belum Selesai Dibaca", "green",function(event){
         undoBookFromCompleted(event.target.parentElement.parentElement);
    });
}

function createDeleteButton() {
    return createButton("Hapus Buku", "red", function (event) {
        let confirmation = confirm("Apa Anda yakin ingin menghapus buku?");  
        if(confirmation)
            deleteBook(event.target.parentElement.parentElement);
   });
}

function addBookToCompleted(bookElement) {
    const listCompleted = document.getElementById(COMPLETED_LIST_BOOK_ID);
 
    const taskTitle = bookElement.querySelector("h3").innerText;
    const taskAuthor = bookElement.querySelector("span#author").innerText;
    const taskYear = bookElement.querySelector("span#year").innerText;

    const newBook = createBook(taskTitle, taskAuthor, taskYear, true);
    listCompleted.append(newBook);
    bookElement.remove();
}

function undoBookFromCompleted(bookElement){
    const listUncompleted = document.getElementById(UNCOMPLETED_LIST_BOOK_ID);
 
    const taskTitle = bookElement.querySelector("h3").innerText;
    const taskAuthor = bookElement.querySelector("span#author").innerText;
    const taskYear = bookElement.querySelector("span#year").innerText;

    const newBook = createBook(taskTitle, taskAuthor, taskYear, false);

    listUncompleted.append(newBook);
    bookElement.remove();
}

function deleteBook(bookElement) {
    bookElement.remove();
} 
