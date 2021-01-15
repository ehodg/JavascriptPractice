
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
