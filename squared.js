const squared=(value)=>{

    let x = 1;
    let square = 1;
    let result = "";

    for(let i =1; i <= value; i++){
        
        value = i + x;
        result = value + square;
        console.log(i + "^" + 2 + " = " + result);
    }
}

console.log(squared(10));