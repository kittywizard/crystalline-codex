let statArr = [];
let min = 9;
let max = 15;

let results = document.querySelector(".results");
let submission = document.getElementById("form");

// form 101
// event listener needs to be on the FORM not the button
// then you can pull in the formdata
// formdata is pulling from each input's NAME not an id

submission.addEventListener('submit', event => {
    let newData = new FormData(event.target);
    let name = newData.get('name');
    let age = newData.get('age');
    
    submission.style.display = "none";
    generateStats(name, age);

    event.preventDefault();
});

function generateStats(name, age) {

    for(let i = 0; i < 6; i++) {
        randomNum(min, max);
        statArr.push(random);
    }

    //have a div with a id of results, in whic we can place the created elements into! it will be the parent
    //need to display all the stats on screen.  

    let nameDisplay = document.createElement('div');
    let ageDisplay = document.createElement('div');

    nameDisplay.textContent = name;
    ageDisplay.textContent = age;

    nameDisplay.classList.add('character');
    ageDisplay.classList.add('character');
    
    results.style.display = 'block';
    results.appendChild(nameDisplay);
    results.appendChild(ageDisplay);

    //display all the stats on page

    //create a loop for each step of the array - foreach?
    //then need to create an element
    //text content set to statArr[i] and so on
    //append to a new div? 
    document.createElement('div');
}

let randomNum = (min, max) =>  random = Math.floor((Math.random() * (max - min + 1)) + min); 
