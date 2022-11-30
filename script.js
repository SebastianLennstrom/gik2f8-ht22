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


//searchField.addEventListener("keyup", (e) => searchBooks(e.target.value));
searchField.addEventListener("keyup", (e) =>
    renderBookList( 
    bookList.filter(({title, author}) => {
        const searchTerm = e.target.value.toLowerCase();
        return title.toLowerCase().indexOf(searchTerm) >= 0 || author.toLowerCase().indexOf(searchTerm) >= 0
     }
    )
  )
);

/*
function searchBooks(searchTerm){
    renderBookList( bookList.filter(({title, author}) =>
    
    (title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) ||
    (author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) 
        )
    );
}
*/

//renderBookList ska uppdateras för att inte skapa en ny lista varje input
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

    const root = document.getElementById("root");
    if(existingElement){
        root.removeChild(existingElement)
    }
    if (bookList.length > 0) { 
        root.insertAdjacentHTML("beforeend", BookList(bookList))
    }
    
}

getAll().then((bookList) => console.log(bookList));




