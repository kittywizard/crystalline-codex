let statArr = [];


let submission = document.getElementById("form");
submission.addEventListener('submit', event => {
    let newData = new FormData(event.target);
    let name = newData.get('name');
    let age = newData.get('age');
    console.log(name);
    //generateStats(name, age);

    event.preventDefault();
});

function generateStats(name, age) {
    //need to generate random numbers five ? times

   //store all the numbers in an array

   //need to check all of them  - for each

   //if 
 
}

function randomNum() {
    let random = Math.floor((Math.random() * 15) + 1); 
}
randomNum();
