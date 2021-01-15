// Part one Looping
const whileLoop = () => {
    let count = 0;
    let a = [];
    while(count < 5) {
        a += "Hello World! While Loop";
        a += "\n";
        count++;
    }
    return a;
}

document.getElementById("while-results").innerHTML= whileLoop();

const doWhileLoop = () => {
    let count = 0;
    let a = []
    do {
        count++;
        a += "Hello World! Do While Loop"
        a += "\n"
    } while (count < 5);
    return a
}

document.getElementById("do-while-results").innerHTML = doWhileLoop()

const forLoop = (n) => {
    let a = [];
    for(let i = 0; i < n; i++){
        a += "Hello World! For Loop";
        a += "\n";
    }
    return a;
}

document.getElementById("for-results").innerHTML = forLoop(5); 


//get change
let charge = prompt('What does the product cost? ');
let payment = prompt('How much are you paying? ');

const coins = {
    "penny": 0.01,
    "nickel": 0.05,
    "dime": 0.1,
    "quarter": 0.25,
    "half-dollar": 0.5,
    "dollar": 1,
    "five": 5,
    "ten": 10,
    "twenty": 20,
    "fifty": 50,
    "hundred": 100,
} 

const getChange = (charge, payment) => {
    let change = payment - charge;
    console.log(change);
    let objKeys = Object.keys(coins);
    console.log(objKeys);
    let objValue = Object.values(coins);
    console.log(objValue);
    while(change != 0) {
        if(change % objValue[-1] == 0) {
            console.log(objKeys[-1])
        } else {
            
        }
    }
}

// print out pyramid
function generatePyramid(row) {
    let k = 2*row -2
    for (let i = 0; i <= row; i++) {
        for(let j = 0; j <= k; j++) {
            console.log(" ");
        }
        k = k -2;
        for(j = 0; j <= i+1; j++) {
            console.log("*");
        }
        console.log("\r");
    }
}
