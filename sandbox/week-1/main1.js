console.log('hi')



console.log(typeof 42);
console.log(typeof "abc");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof { a: 1 });
console.log(typeof [1, 2, 3]);
console.log(typeof function hello() {});


var adult = true;

if (adult) {
  var myName = "Bob";
  var age = 24;
}

console.log(myName);
// Bob

console.log(age);
// Error!


let variable = "foo" + 3; // 'foo3'
console.log(variable);

let names = ["Bob", "Sue", "Jorge", "Svetlana"];
console.log(names)
names.push("Grace");
console.log(names);
//Displays ['Bob','Sue','George','Svetlana','Grace']
names.pop();
console.log(names);
//Displays ['Bob','Sue','George','Svetlana']
let myString = "This is my String!";
console.log(myString.length); // 18