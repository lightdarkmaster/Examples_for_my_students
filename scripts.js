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


const ktest = (array) => {
    return array.map(function(x){
        let res = 0;
        for(let i=0; i < x; i++){
            res += x;
        }
        return res;
    })
}

console.log(ktest([1, 4, 6, 8, 9, 9]));


const solved =()=>{
    let given = 2;
    let given2 = 2;
    
    //default
    const num1 = 5;//multiply to the first number
    const num2 = 8;//add 
    const num3 = 2;//minus prev operation;

    const o1 = given * num1;
    const o2 = o1 + num2;
    const o3 = o2 * given2;
    const o4 = o3 - num3;

    const r = o4 
    
    return o4;


}
//console.log(solved())