
// Ordeered collextion of values that can grow & hold mixed types [Tuple]
// Arrays are Object under hood : Obj with numeric kay with value


// declarations
const marks = [10,20,30];
let arr = new Array(5); // size is set But grows automatically
arr = [1,2,5,5,6,7]
console.log(`size Grew automatically : ${arr.length}`)
const arr1 = Array.of(5, 6, 7)  // Array with elements
console.log(arr1)
const strArr = Array.from("KIRAN")  // Create array from iterable object
console.log(strArr)
console.log(arr[99]) // No Out-Of-Range error  >> returns undefined instead

const pushOP = arr.push(50)
console.log(`push method returns updated Length: ${pushOP}`)  // add element at end of array & returns updated Length of array
arr.pop()  // removes last inserted element
arr.unshift(10)  // Queue : add element at front
console.log(arr)
arr.shift()  // queue : removes element from front

// Arrays are Object under hood : Obj with numeric kay with value
for( let a of arr)   // OF - traverse VALUEs of array
{
    console.log(a)
}

for( let a in arr)  // IN - traverse index KEYs of array
{
    console.log(a)
}

//If No values added in between >> all filled with undefined/Empty
arr [10] = 500
console.log(arr)
console.log(arr.includes(500))  //true/false
console.log(arr.indexOf(500))

console.log(arr1.join('>'))  // Joins with seperator & return array elements in single string







