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


searchField.addEventListener("keyup", handleKeyPress);



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


function renderBookList(bookList){
    let html = ` 
    <ul class="book-list rounded-md border-2 border-blue-400 bg-white w-full mx-auto">`;
    for (let i = 0; i < bookList.length; i++) {
        html +=`
        <li 
            class="book-list-item md-2 mx-2 last:md-0 p-3 
            text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
            ${bookList[i].author} - ${bookList[i].title}
       </li>`
        
    }     
    html += `</ul>`;

    const existingElement = document.querySelector(".book-list");
    console.log("existingElement")

    const root = document.getElementById("root");
    if(existingElement){
        root.removeChild(existingElement)
    }

    root.insertAdjacentHTML("beforeend", html)
    
}




