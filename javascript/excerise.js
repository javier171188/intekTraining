class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

    addFavoriteBook(bookName){
        if(!bookName.includes('Great')){
            this.favoriteBooks.push(bookName);
        }
    }

    printFavoriteBooks(){
        let message = "Favorite Books:";
        for (book of this.favoriteBooks){
            message += "<br>" + String(book);
        }
    
        document.getElementById('excer').innerHTML= message;
    }
}

function loadBooks( bookShelf ) {
	fakeAjax(BOOK_API,function theBooks(books){
        for (book of books){
            bookShelf.addFavoriteBook(book);
        }
        bookShelf.printFavoriteBooks();
    });
}
var BOOK_API = "https://some.url/api";

var shelf = new Bookshelf();
loadBooks( shelf );


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}



/*

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books

printFavoriteBooks() */