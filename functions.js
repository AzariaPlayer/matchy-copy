/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string){
    // loop through each array index
    for(var i = 0; i < array.length; i++){
        // compare the indexs name and the string input
        if(string === array[i].name){
            // return the whole index if found
            return array[i];
        }  
        }
        // return outside of the loop
        return null;
    }



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    // if an animal with the name inputed already exist replace the entire object with the replacement
    // lets loop through the array first 
    for(var i = 0; i < animals.length; i++){
        if(name === animals[i].name){
            // you want the animals[i] to now equal the replacement object 
             animals[i] = replacement;
             // break after it is done 
             break;
        }
    }
    // return the new object
    return animals[i];

    // else do nothing 
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    // rememeber the for loop
    for(var i = 0; i < animals.length; i++){
        if(name === animals[i].name){
            // use splice to start with the index and only remove 1 
           animals.splice(animals[i], 1);
           
        }
    }
    
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    
    for(var i = 0; i < animals.length; i++){

        if(animals[i].name === animal.name){
            return;
        }
        
       
    }
    if(animal.species.length > 0 && animal.name.length > 0){   
       return animals.push(animal);
     }
    
}
    
// huh 

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}