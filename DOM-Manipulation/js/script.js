//querySelector
//querySelectorAll
//getElementById

//1. select the heading h2
const heading2 = document.querySelector("h2");
console.dir(heading2);


//2. select element with class .heading2
const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

//3. select element with an id #list using querySelector
const listById = document.querySelector("#list");
console.log(listById);

//4. selsct element with id #list using getElementById
const list = document.getElementById("list");
console.log(list);

//5. select single li
const listItem = document.querySelector("li");
console.log(listItem);

//6. sleect multiple listed items
const listItems = document.querySelectorAll("li");
console.log(listItems);


// select the h1 and change the color to be red
const heading1 = document.querySelector("h1");
console.log("before");
console.dir(heading1);
heading1.style.color = "red";
heading1.style.border = "5px solid green";
heading1.style.padding = "1rem";
heading1.style.backgroundColor = "blue";

// select the div and add the class c.container to it using JS
const myDiv = document.querySelector("div");
console.dir(myDiv);
myDiv.classList.add("container");

//Change the heading text
heading1.innerText = "new heading";
heading1.innerHTML = '<p>New new heading</p>';

//for loop
                    //     0       1        2       3         4
const myArrayOfNames = ["hesh","kjetil","jonas","johnny", "Marius"]
console.log(myArrayOfNames[0]);

for(let i = 0; i < myArrayOfNames.length; i++){
    console.log(myArrayOfNames[i]);
}

// i = 0
//0 < 4
//i = 0+1

//console.log(myArrayOfNames[0]);
//console.log(myArrayOfNames[1]);
//console.log(myArrayOfNames[2]);
//console.log(myArrayOfNames[3]);
//console.log(myArrayOfNames[4]);

for(let i = 1; i <= 100; i++){
    console.log(i);
}

//arithmetic operators
//= + ++

//addition
let sum = 10 + 5;
console.log(sum)

//subtraction
let difference = 10 - 5;
console.log(difference);

//multiplication
let multiply = 10 * 5;
console.log(multiply);

//division
let divide = 10 / 5;
console.log(divide);

//modulus
let remainder = 10 % 4; //remainder is 2
console.log(remainder);


//simple operators

//simple assignment
let a = 5;


//addition assignment (+=)
let b = 10;
b += 5; //b is now 15
//b= b + 5= 15

//subtraction assignment (-=)
let c = 15;
c -= 5; //=10
// c = c - 5 = 10;

//comparison operator

//equal to (==)
let isEqual = (5 == "5"); //=tue
console.log(isEqual);

//strict equality (===)
let isStrictEqual = (5==="5"); //=false
console.log(isStrictEqual)
//compares also datatype

//not equal (!=)
let notEqual = (5 != 6); //true

//greater than/ equal (>, <, >=, <=)
let isGreaterThan = (10 > 5); //true

// AND // OR
// && //  ||

let andResult = (5 > 3 && 10 > 5);
console.log(andResult);

//true && true = true
//false && true = false
//true || true = true
//true || false = true

//NOT (!)
!(5 > 10) //true


// task
// const heading1 = document.querySelector("h1");
// console.log(heading1);
// heading1.innerHTML = ("welcome to javascript class")
// heading1.style.color = ("blue");
// heading1.style.fontSize = ("3rem")

const myBtn = document .querySelector("button")

myBtn.addEventListener("click", function () {
    list.innerHTML += `<li>New item</li>`
})
