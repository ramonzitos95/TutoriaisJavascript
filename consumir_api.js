var url = "https://jsonplaceholder.typicode.com/todos/";
fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))