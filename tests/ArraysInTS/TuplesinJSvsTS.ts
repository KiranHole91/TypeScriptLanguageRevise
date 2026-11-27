// Tuples in JS are most flexible Array can hold any type of elements in any Sequence in Array Obj

let tupleInJS = [10, 20, true, 'Kiran', [1,2,3], {role: 'QA'}, 100, 'Hole']
tupleInJS.unshift(false)
console.log(tupleInJS)

// Tuples in TS are very strict, holds only defined Types in same sequence in array

const tupleInTS : [number, string, boolean, number[], Object] = [10, 'Dhruv', true, [1,2,3], {role: 'student'}]
tupleInTS.unshift(100)  // will replace 1st number
tupleInTS.unshift('Daksh') // But this works
tupleInTS.push('99')
console.log(tupleInTS)

// wrong sequence in Tuple in TS
const wrongSeq : [number, string] = ['kiran', 40] 
