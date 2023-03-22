// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    
    cats.push("Ralph");

}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(){
    const cat2 = [...cats,"Broom"];//creates a new Array cat2 and adds "Broom" to the end of the array
    return cat2;

}
function prependCat(){
    const cat2 = ["Arnold",...cats,];//creates a new Array cat2 and adds "Broom" to the start of the array
    return cat2;

}
function removeLastCat(){
    
   const cat2 =cats.slice(0,2);// slices from index 0 to index 1 and return the new array
   return cat2;
}
function removeFirstCat(){
    const cat2 =cats.slice(1);// slices from index 1 to the end leaving out index 0 which is the first item on the array
   return cat2;
}
