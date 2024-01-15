//setTimeout
//a function used to execute after a specific period of time

//1.
// setTimeout(function () {
//     console.log("hello")
// }, 5000);
//
// //2.
//
// const loader = document.querySelector(".loader");
// console.log(loader);
//
// setTimeout(function () {
//     loader.innerHTML = "Downloading Complete!";
// }, 5000);
//
// const counting = document.querySelector(".counter");
// console.log(counting);
//
// setTimeout(function () {
//     for(let i = 10; i >= 0; i--){
//         console.log(i)
//     }
// }, 1000)

const ad = document.querySelector(".ad");
console.log(ad);

setTimeout(function (){
    ad.style.display = "block";
}, 3000);


//setInterval
//is similar to setTimeout, but it executes a function at a certain interval until its cleared
//
// let count = 0;
// const intervalId =  setInterval(function(){
//     console.log("hello from the other world")
//     count++; //increment
//     if(count === 5){
//         clearInterval(intervalId);
//     }
// }, 1000);

const list = document.querySelector(".container");
console.log(list);

let count = 1;

const listAdd = setInterval(function(){
    console.log("fillip the ")
    list.innerHTML += `<li>fillip the ${count}</li>`
    count++;
    if(count === 6){
        clearInterval(listAdd)
    };
}, 1000)


