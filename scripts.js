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
    let result = [];
    return array.map(function(x){
        for(let i = 0; i < value; i++){
            result += value;
        }
        return result
    })

    //for (let i = 0; i < value; i++) {
        //result += value;
    //}
    //return result;
}

//console.log(ktest(4));



const f =(array,length)=>{

    let s = [];
    for(let i; i < array; i++){
        
    }
}

//


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
    
    return o4;


}
console.log(solved())