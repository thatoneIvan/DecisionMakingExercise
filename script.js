// 1a
/*
-this is one way of doing it.-
let randomNum = Math.floor((Math.random()*5));
randomNum++;
console.log(randomNum); //3
*/
// OR
//let randomNum  = Math.floor(Math.random()*5+1);
// console.log(randomNum);  //5
// or - LONG WAY OF DOING THIS -
let randomNum = Math.random ();
randomNum *= 5;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum); //5

// 1b
if (randomNum >=4){
    console.log("Greater than or equal to 4");
} else if (randomNum === 3 || randomNum === 2) {
    console.log("Equal to 2 or 3");
} else {
    console.log("Equal to 1");
}

// 1c
if (randomNum !== 3) {
    console.log("Not equal to 3");
}

// 1d
if (randomNum !== 3 && randomNum !== 5){
    console.log("Not equal to 3 AND not equal to 5");
}
if (randomNum !== 3 && 5) {
    console.log("NOT equal to 3 AND not equal to 5");

}
// 1e
if (randomNum === 2 || randomNum === 4){
    console.log("Equal to 2 or equal to 4")
}


// BONUS
// 2
console.log("randomNum");

/*
if (randomNum >= 4) {
    console.log("Greater than or equal to 4");
} else {
    console.log(":ess than 4");
}
*/
// Dulce's example
randomNum = (randomNum >= 4) ? "Greater than oe equal to 4" : "Less than 4";
// Vickie example
randomNum >= 4 ? console.log("Greater than or equal to 4") : console.log("Less than 4");

// 3
//Switch statement takes a parameter/argument and returns something based on the case (or the match) that the parameter/argument goes with
// In the example if randomNum is 1 it will display "One" in the terminal, if randomNum is 2 it will display "Two",etc.
switch (randomNum){
    case 1:
        console.log("One");
        // Breaks keywords are needed between each case so that the code for teh csae that follows diws NOT also run
        break;
        case 2:
            console.log("Two");
        break;
        case 3:
            console.log("Three");
        break;
        case 4:
            console.log("Four");
        break;
        case 5:
            console.log("Five");
        // There is no need for the break at the end of the switch statement since there are no other cases.
}