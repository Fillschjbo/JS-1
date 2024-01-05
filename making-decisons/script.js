// IF and ELSE statements

let temperature = 18;

if(temperature > 30){
    console.log("it is very hot");
} else if(temperature > 20){
    console.log("the weather is nice");
} else if(temperature > 15){
    console.log("its cold");
} else{
    console.log("the weather is very cold");
}

let score = 50;

if(score < 50){
    console.log("fail");
} else if(score >= 50){
    console.log("passed")
}


let grade = "A"

if (grade === "A"){
    console.log("very good" + " you got a score of " + score);
} else if (grade === "B"){
    console.log("very good")
}

//switch case
//used when there is a lot of variables

let color = "green";

switch (color){
    case "red":
        console.log("stop!");
        break;
    case "yellow":
        console.log("Get ready");
        break;
    case "green":
        console.log("GO!");
        break;
    default:
        console.log("out of order");
}

//Task

// let grade = "C"
//
// switch(grade){
//     case "A":
//         console.log("outstanding")
//         break;
//     case "B":
//         console.log("Very good")
//         break;
//     case "C":
//         console.log("Good effort")
//         break;
//     case "D":
//         console.log("Needs improvement")
//         break;
//     case "F":
//         console.log("Failed! must retake exam")
//         break;
//     default:
//         console.log("not graded yet")
// }


//scope

const myName = "fillip"

if(true){
    let myName = "FILLIP"
    console.log(myName);
}

console.log(myName)