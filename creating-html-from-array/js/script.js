const pets = [
    {
        type: null,
        colour: "brown",
        age: 10,
        friendly: true,
    },
    {
        colour: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        colour: "#00ff00",
        age: 20,
        friendly: false,
    },
];
// Select the pet-container class
const petContainer = document.querySelector(".pet-container");
console.log("petContainer ", petContainer)

let html = "";

const totalItems = pets.length;

console.log(totalItems)

for(let i = 0; i < totalItems; i++){
    html += `
                <div>
                  <p>Color: : ${pets[i].colour}</p>
                  <p>Age: : ${pets[i].age}</p>
                  <p>Friendly: ${pets[i].friendly ? " yes it is friendly" : "no it is not friendly"}</p>
                <div/>
    `
    console.log(html);
    petContainer.innerHTML = html;
}

// Create a html variable to hold our html in it when we use the loop
// Loop over the array
// change the innerHTML