//local storage

const myVariable= "some text"

window.localStorage.setItem("theVariable", myVariable);

window.localStorage.setItem("Name", "Fillip")


//save objects and arrays

let car = {
    make: "bmw",
    model: 1992,
    price: 2000
}
window.localStorage.setItem("myCar", JSON.stringify(car));

window.sessionStorage.setItem("fav", "BMW");


//task

let favoriteFlavor = "chocolate";
let coffee= {
    origin: "south africa",
    intensity: "medium 7"
};

let shoppingList = ["coffee", "jam", "milk"];

window.localStorage.setItem("favorite flavor", favoriteFlavor);

window.localStorage.setItem("coffee", JSON.stringify(coffee));

window.localStorage.setItem("Shopping list", JSON.stringify(shoppingList));