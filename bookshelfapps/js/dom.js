const UNCOMPLETED_LIST_BOOK_ID = "incompleteBookshelfList";
const COMPLETED_LIST_BOOK_ID = "completeBookshelfList"; 

function addBook() {
    const uncompletedBookList = document.getElementById(UNCOMPLETED_LIST_BOOK_ID);

    const textBookTitle = document.getElementById("inputBookTitle").value;
    const textBookAuthor = document.getElementById("inputBookAuthor").value;
    const textBookYear = document.getElementById("inputBookYear").value;
    

    const book = makeUnfinished(textBookTitle, textBookAuthor, textBookYear);
    uncompletedBookList.append(book);

    
}

function makeUnfinished(judul, penulis, tahun) {
 
    const bookTitle = document.createElement("h3");
    bookTitle.innerText = judul;
 
    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = "Penulis: " + penulis;
 
    const bookYear = document.createElement("p");
    bookYear.innerText = "Tahun: " + tahun;

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner")
    textContainer.append(bookTitle, bookAuthor, bookYear);
 
    const container = document.createElement("div");
    container.classList.add("item", "shadow")
    container.append(textContainer);
    container.append(createReadButton());
    
    return container;
}

function createButton(buttonTitle, buttonClass , eventListener) {
    const button = document.createElement("button");
    button.innerText = buttonTitle;
    button.classList.add(buttonClass);
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

function addBookToCompleted(bookElement) {
    bookElement.remove();
} 