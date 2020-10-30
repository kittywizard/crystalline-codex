
const results = document.querySelector(".results");
const button = document.getElementById("submit");

button.addEventListener('click', generateName);

function generateName() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        //do things here
        console.log(data);
        results.textContent = data.title;

    });

}

