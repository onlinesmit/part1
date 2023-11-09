// how to iterate object 
const person = {
    name: "Smit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

for(let key in person){
    console.log(key); //o/p  name age person hobbies
}

for(let key in person){
    console.log(person.key);  //o/p  3 undefined
}
// for in loop 
// Object.keys 

// for(let key in person){
//     console.log(person[key]);
// }

// for(let key in person){
//     console.log(`${key} : ${person[key]}`); //template string
//     // console.log(key," : " ,person[key]);
// }

console.log(Object.keys(person));

console.log(typeof (Object.keys(person)));
const val = Array.isArray((Object.keys(person)));
console.log(val);

// for(let key of Object.keys(person)){
//    console.log(person[key]);
// }