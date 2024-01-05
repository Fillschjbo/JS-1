console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
// looping or iteration

for(let i = 1; i <=5; i++){
    console.log(i)
}

// for (let = (starting point); (ending); (increase))

// loop is for repeating

for(let i = 0; i <= 5; i++){
    console.log("hello")
}

for(let i = 1; i <= 10; i++) {
    console.log(i)
}

const cars = ["Tesla", "BMW", "volvo", "Volkswagen"]

console.log(cars.length);

const totalNumberOfCars = cars.length;

for(let i = 0; i < totalNumberOfCars; i++) {
    console.log(cars[i])
}


// TASK 1
const fruits= ["Apple", "Banana", "cherry"];

console.log(fruits.length);

const totalFruits = fruits.length;

for(let i = 0; i < totalFruits; i++) {
    console.log(fruits[i])

    //last item in array
    console.log(fruits[fruits.length -1])
}