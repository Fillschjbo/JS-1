//
// const myCar = window.localStorage.getItem("myCar");
// console.log(myCar);
//
// //parse (convert back to object)
//
// const myCarParsed = JSON.parse(myCar);
// console.log(myCarParsed)


const favorite = window.localStorage.getItem("favorite flavor");
console.log(favorite);

const getCoffee = window.localStorage.getItem("coffee");

const coffeeParse = JSON.parse(getCoffee);
console.log(coffeeParse)

const getShoppingList = window.localStorage.getItem("Shopping list");
const parseShoppingList = JSON.parse(getShoppingList);
console.log(parseShoppingList);

