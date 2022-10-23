const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];



//question 1
//question 1 answer: 

const cat = {
    complain: function () {
        console.log("Meow!");
    }
};

cat.complain();


//question 2
//question 2 answer:

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


//question 3
//question 3 answer: 

heading.style.fontSize = "2em";


//question 4
//question 4 answer:

const subheading = document.querySelector("h3");
subheading.classList.add("subheading");


//question 5
//question 5 answer:

const paragraphs = document.querySelectorAll("p");
var paragraph = document.querySelectorAll("p");

for (var i = 0; i < paragraph.length; i++) {
    console.log('paragraph:', paragraph[i]);
}


//question 6
//question 6 answer: 

const results = document.querySelector(".results");
var resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p> New Paragraph </p> ";
resultsContainer.style.backgroundColor = "yellow";


//question 7
//question 7 answer: 

function newList(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

newList(cats);

//question 8
//question 8 answer ??

function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {

    }
}