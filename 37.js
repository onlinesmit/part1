// difference between dot and bracket notaion
const key = "email";
const person = {
    name: "Smit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
//in javascript not allow space if we want to write like (person hobbies) it is wrong instead of this we use like string this "person hobbies"
}
// console.log(person);
console.log(person["person hobbies"]);
// we can use like this console.log(person.person hobbies); but the problem is javascript not access space so here use string like method in bracket
person["key"] = "skg@gmail.com";
console.log(person);
