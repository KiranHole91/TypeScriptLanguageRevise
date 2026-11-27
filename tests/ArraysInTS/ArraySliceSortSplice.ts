/**
 * Array sorted Lexagraphically > 1, 11,111, 22,200, 30,333
 */

let arr = [10,50, 20, 200, 31, 111, 350,551 ]
const normalReverse = arr.sort();  // lexical sorting
console.log(normalReverse)

/**
 * For normal sorting useer - compareTo() like java
 */

arr.sort( (a,b) => a - b )   // Ascending   >> 10-50 = -40 ..... negative = natural order >> No swap needed
console.log(arr)

arr.sort( (a,b) => b - a )   // Descending   >> 50-10 = 40 .... positive = Not natural >> SWAP
console.log(arr)

const num =  [1,2,3,4,5]

/**
 *  SLICE() : Only return slice of array <start index, end index -1>, Original array not touched (No mutation)
 *  SPLICE() : update original arry (mutation) <start index, end index && Last index (either original or replace with third parameter value)
 */

console.log(`slice op : ${ num.slice(2,4) }` )  //  <start index, end index -1 >
console.log(`original array post slice() ${num}`)

console.log(`splice op : ${ num.splice(2,4, 99) }` )  //  <start index, end index, ?? replaces element at the end index >
console.log(`original array post splice() ${num}`)

