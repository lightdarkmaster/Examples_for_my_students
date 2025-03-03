console.log("Test I: Create a function that filters an array of strings based on the length of each string, returning only strings longer than a specified length.");

const test1 = (array,length) =>{
    
    const result = array.filter((array) => array.length > length);
    return result;
}

console.log(test1(["Apple","Banana","Peaches","Mangoes","Absdedede","Apt"],6));





console.log("Test II: Implement a function that squares each number in an array, returning a new array with the squared values.");
const test2 = (array) =>{
    return array.map(function(x){
        return Math.pow(x, 2);
    });

}
console.log(test2([1,2,3,4,5,6]));


const ktest =(value)=>{
    let result = 0;
    for (let i = 0; i < value; i++) {
        result += value;
    }
    return result;
}

console.log(ktest(4));