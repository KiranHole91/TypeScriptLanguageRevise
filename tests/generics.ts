/**
 * 
 * @param name : GENERIC >> can hold any data type
 * @returns GENERIC >> can RETURN same data type > Type same
 * Question >> if used ANY?? return type will be any only - so not type safe
 */
function values<T> (name: T) : T {
    return name;
}

const str = values("kiran"); //String data type
const num = values(10);     // NUMBER data type
const boo = values(true);   // Boolean data type

console.log(str)


//For Array
function arrVal<T> (num: T[]) : T{
    return num;
}