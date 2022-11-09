'use strict';

const searchInput = null;

const bookList =[
    {
        id: 1,
        author: 'Charles Dickens',
        title: 'Oliver Twist'
    },
    {
        id: 2,
        author: 'William Shakespear',
        title: 'Hamlet'
    }
];



function handleKeyPress(input) {
/*ska ta emot och läas av värdet i inputfältet
skicka värdet till function searchbooks
searchbooks returnerar en filtrerad lista.
filtrerade listan skickas till en function som renderar listan*/
    searchBooks(input, bookList)
}

function searchBooks(searchTerm){
    let filteredList = [];
    for (let index = 0; index < bookList.length; index++) {
        const title = bookList[index].title.toLowerCase()
        if (title.indexOf(searchTerm.toLowerCase()) >= 0){
            filteredList.push(bookList[0])
        }
        
    }
    renderBookList(filteredList)
}


function renderBookList(list){
    console.log(list)
}

handleKeyPress('e')

