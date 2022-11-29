'use strict';



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

//const searchInput = document.children[0].children[1].children[1].children[1];
const searchField = document.getElementById('searchField')
console.log(searchField)

searchField.addEventListener("keyup", (e) => console.log(e.target.value));



function handleKeyPress(e) {
/*ska ta emot och läas av värdet i inputfältet
skicka värdet till function searchbooks
searchbooks returnerar en filtrerad lista.
filtrerade listan skickas till en function som renderar listan*/
    searchBooks(e.target.value)
}

function searchBooks(searchTerm){
    let filteredList = [];
    for (let index = 0; index < bookList.length; index++) {
        const title = bookList[index].title.toLowerCase()
        if (title.indexOf(searchTerm.toLowerCase()) >= 0){
            filteredList.push(bookList[index])
        }
        
    }
    renderBookList(filteredList)
}


function renderBookList(list){
    console.log(list)
}




