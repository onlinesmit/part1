// array destructuring 

//in other programmming language
const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

//in javascript some another feacture 
// let [myvar1, myvar2,] = myArray;
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);


let [myvar1, , myvar2, ...myNewArray] = myArray; // here we use let bcoz in const we can not change the value after declare const
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2); // if her we want to store 3rd value then we use one extra comma in let then it scap the 2nd value and shipt to 3rd value
console.log(myNewArray);


