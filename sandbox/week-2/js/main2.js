// comarisons
console.log(5>9);
// === looks at the dat type so this is false
console.log('5'===5)
console.log(5>=5 && 6 == '6')
// is five not equal to five causing this statement to be false
console.log(5!=5 && 6 == '6')

//setting a veriable
let yourAge=13;

if(yourAge >= 18){
    console.log('you can vote');
} else {
    console.log('you cant vote');
}

// if statements
let numSales = 1900;

if (numSales <= 50) {
    console.log("Way too few sales");
  } else if (numSales <= 1000) {
    console.log("Average number of sales");
  } else {
    console.log("A good number of sales.");
  }
  

  //you can also use switches over if statements.
let grade = "A";
let gpaPoints = 0;
switch (grade) {
    case "A":
        gpaPoints = 4;
        break;
    case "B":
        gpaPoints = 3;
        break;
    case "C":
        gpaPoints = 2;
        break;
    case "D":
        gpaPoints = 1;
        break;
    case "F":
        gpaPoints = 0;
        break;
      default:
        gpaPoints = null;
}

console.log(gpaPoints);

// looking at a range

yourAge = 4;
if(yourAge < 5){
    console.log('not in school or preschool')
} else if(yourAge <= 18 ){
    console.log('you are in secondary school')
} else{
    console.log('you could be in collage')
}

// how to get a random bumber
// creating a function with java

let num =Math.random();
function flip(){
    if(num > .5){
        console.log('Heads')
    } else{
        console.log('tails')
    }
}


// this is called a date object
let date = new Date();
//these get elements from date
let year = date.getFullYear();
let day = date.getDate();
console.log(date);
console.log(year);
console.log(day);


// replacing Content in HTML with Java script
document.querySelector('#yr').textContent = year;

// sends new HTML code to be implimented.
document.querySelector('.text').innerHTML = '<h2> Subtitle </h2>'

// creating a new element that does not exitst
let newelement = document.createElement('p');
// adding content to element
newelement.textContent = 'new text Secret tunnel secret tunnel';
//placing content in element on page
document.querySelector('div').appendChild(newelement);


//using arrays
let classes = ['CSE121', 'CSE350', 'CSE560']

document.querySelector('ul').textContent = classes.join('\n');

classes.push('newClass')

document.querySelector('ul').textContent = classes.join('\n');

// resise a immage with jave
document.querySelector('img').setAttribute('src', 'img/pciture')