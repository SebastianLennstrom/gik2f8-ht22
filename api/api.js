const url = "https://gik2f8-labs.herokuapp.com/books";
//två sätt att hämta url
/*function getAll(){
    return fetch(url)
    .then((result) => result.json())
    .then((jsonData) => jsonData)
    
}*/

async function getAll(){
    const result = await fetch(url).then((result) => result.json);
    const jsonData = await result.json();
    return jsonData;
}