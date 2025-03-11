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

console.log(squareWM([10]));