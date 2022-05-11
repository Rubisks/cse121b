/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo ={
    // Step 2: Inside of the object, add a property named name with a value of your name as a string
    name : 'Tucker Strand',
    // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo : "images/photo.jpeg",
    // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods : ["Pizza", "Pasta", "IceCream", ],
    // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies : ["hiking", "robotics", "electronics"],
    // Step 6: Add another property named placesLived with a value of an empty array

}
    // Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInfo.placesLived = [
    // Step 8: For each property, add appropriate values as strings
    // Step 9: Add additional objects with the same properties for each place you've lived
    {
        place : 'Rexburg Idaho',
        length: '5 Years'
    },
    {
        place : 'laGrande Oregon',
        length: '20 Years'
    },
    {
        place : 'SanDiego California',
        length: '2 Years'
    },
]

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').src = 'images/photo.jpeg';
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', 'photo of Tucker');
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const foodList = document.getElementById('favorite-foods');
let Foods = '';
myInfo.favoriteFoods.forEach(item =>{
    Foods += "<li>" + item + "</li>"; 
})
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foo
foodList.innerHTML = Foods;
// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobbieList = document.getElementById('hobbies');
let myhobbies = '';
myInfo.hobbies.forEach(item =>{
    myhobbies += "<li>" + item + "</li>";
})
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
hobbieList.innerHTML = myhobbies;

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let locationsLived = ''
const locationList = document.getElementById('places-lived');
myInfo.placesLived.forEach(location =>{
    locationsLived += "<dt>" + location.place + "</dt>" + "<dd>" + location.length + "</dd>";
})
locationList.innerHTML = locationsLived ;
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
