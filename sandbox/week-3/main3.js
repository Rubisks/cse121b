
// this is a hoisted function call and finds the function to call it
show();

function show(){
    console.log('this is a string');
};

// this is a traditional function call
show();



let answer = square(9);

function square(number) {
    return number * number;
  };
  // sets the return of square to be in result of HTML
document.querySelector('#result').textContent = answer;



let add = function(num1, num2){
    return(num1 + num2)
}
document.querySelector('#addresult').textContent = add(2,6)

//arrow function -- efficient syntax, no hoisting allowed

let sum = (n1,n2) =>(n1 +n2);

document.querySelector('#sum').textContent = sum(6,6)



// example 1
const steps = ["one", "two", "three", "one", "two", "three"];
// callback declaration
function makeList(item) {
  const listElement = document.getElementById("myList");
  listElement.innerHTML += `<li>${item}</li>`;
}
steps.forEach(makeList);


// events for text bos and buttons
const buttonElement = document.getElementById("submitButton");

function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);


// array methods notes should replace for loops
const list =['one', 'two', 'three'];

// want to loop through the sting and add them to a unorder =ed list



const myArray =[1, 2, 3, 4, 5, 6, 7]
const luckyNumber = 5;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex)


//map array method - gises a new array by changing each item in some way, but the orignal array remails the same.


const array1 =[1, 9, 16, 40, 10]

const arrayHtml = array1.map(function (list){
  return '<li>${list * 2}</li>';
})

document.getElementById("mylist").innerHTML = arrayHtml.join(' ');

console.log(arrayHtml)