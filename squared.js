const squared = (value) => {

    let x = 1;
    let square = 1;
    let result = "";

    for (let i = 1; i <= value; i++) {

    }
}

console.log(squared(10));


const squareWM = (value) => {

    return value.map(function(x) {
        let res = 0;
        for (let i = 0; i < x; i++) {
            res += x;
        }
    })
}

//console.log(squareWM([10]));


const square = (n) => {

    // Base case 
    if (n == 0) return 0;

    // Handle negative number 
    if (n < 0) n = -n;

    // Get floor(n/2) using 
    // right shift 
    let x = n >> 1;

    // If n is odd  
    if (n % 2 != 0) {
        return ((square(x) << 2) + (x << 2) + 1);
    } else {
        // If n is even 
        return (square(x) << 2);
    }
}
console.log(square(10));