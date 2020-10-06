let statArr = [];
let min = 9;
let max = 15;

let submission = document.getElementById("form");

// form 101
// event listener needs to be on the FORM not the button
// then you can pull in the formdata
// formdata is pulling from each input's NAME not an id

submission.addEventListener('submit', event => {
    let newData = new FormData(event.target);
    let name = newData.get('name');
    let age = newData.get('age');
    generateStats(name, age);

    event.preventDefault();
});

function generateStats(name, age) {
    //need to generate random numbers five ? times
    for(let i = 0; i < 6; i++) {
        randomNum(min, max);
        statArr.push(random);
    }

    console.log(statArr);

   //store all the numbers in an array

   //need to check all of them  - for each

   //if 
 
}

let randomNum = (min, max) =>  random = Math.floor((Math.random() * (max - min + 1)) + min); 
