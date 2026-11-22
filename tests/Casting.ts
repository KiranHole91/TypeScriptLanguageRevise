
// Override type of a variable

/******* AS **********/

let sex : unknown = 'Male';
console.log((sex as string).length); // prints 4


// Casting dosn't change data within the variable
let x: unknown = 4;
console.log((x as string).length);  // prints 'undefined' since numbers don't have a length


// console.log((4 as string).length); 
// Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. 
