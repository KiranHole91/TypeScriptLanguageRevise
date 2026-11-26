
let arr = ['X','S', 'M', 'XL', 'X', 'M'];
console.log(`Array is : ${arr}`);
let projectSize = new Set<string>(arr);
console.log(`Set of Array is :`, projectSize) // Sets don't have one. They fall back to the default Object.prototype.toString()
console.log(`With spread Operator : ${[...projectSize]}`) // for Array : the ${...} inside a template literal turns the value into a string by calling its toString() method. 

projectSize.add('XS');
console.log(`Set of Array is :`, projectSize) 
projectSize.delete('XS');
console.log(`Delete XS :`, projectSize) 
//projectSize.clear() 

projectSize.forEach((key) =>  console.log(key));

for(let size of projectSize)
{
    console.log(`with for Loop : ${size}`);
}

