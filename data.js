/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
// using dot notation add species as a property
animal.species = 'cat';
// using bracket notation add a property called name and give the animal a name 
animal['name'] = 'Pickles';
// use bracket notation to give a property called noises with a empty array 
animal.noises = [];
// print animal object to console
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
// using bracket notation give noises the first element 
noises[0] = 'Meow';
noises.push('Purr');
noises.unshift('Hiss');
noises.unshift('wiwiwi');
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// bracket notation and assign noises to animal to the noises array
animal.noises = noises;
// add another noise 
animal.noises.push('aluhluhluh');


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * - You can use either dot notation or bracket notation.
 * 2. What are the different ways of accessing elements on arrays?
 * - You can only use bracket notation to access an element in an array.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable name animals and assign it an empty array 
var animals = [];
// push animal to animals 
animals.push(animal);
console.log(animals);
// create a variable called duck 
var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
// push duck to animals 
animals.push(duck);
console.log(animals);
var bird = {
  species: 'bird',
  name: 'Woody',
  noises: ['cawcaw', 'tweet', 'hoot', 'chirp']
};
animals.push(bird);
console.log(animals);
var dog = {
  species: 'dog',
  name: 'Susie',
  noises: ['bark', 'whine', 'sniff', 'pant']
};
animals.push(dog);
console.log(animals);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// will be using an array that way i can use bracket notation to access the indexes 
var friends = []; 
// create a function that takes the animal array and returns a random index of the input array
// use Math.random()
function getRandom(animals){
  // make a variable to hold math.random - animals.length is the max it can choose from
  let index = Math.floor(Math.random() * animals.length);
  // return a random index from the input (animals)
  return index;
  
}
// friends.push(animals[3].name);
/* 
[ ] Using a random index from this function that you just created, get a random animal and add its name to friends.
[ ] console.log friends.
[ ] Using bracket notation, add the friends list as a property also named friends on one of the animals in the animals array

*/


friends.push(animals[getRandom(animals)].name);

console.log(friends);
animals[0].friends = friends;


console.log(animals);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}