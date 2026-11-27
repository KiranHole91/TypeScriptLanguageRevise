let score = [91, 88, 47, 62, 55, 68]

/** way 1
 * first ASC sorting & then give length-2 index
 */
score.sort( (a,b) => a-b)

console.log(`with sorting array largest: ${score[score.length-1]} & second largest: ${score [score.length-2]}`)

/** way 2 
 * brute force 
 */

let height = [3, 5, 4, 5.5, 6, 5.8]
let largest = -Infinity; // height[0] >> TypeScript can't tell whether index 0 exists.
let secondLargest =  -Infinity;

for(let no of height)
{
    if (no > largest)
    {
        secondLargest = largest;
        largest = no;
    }
    else if (no > secondLargest && no !== largest)
    {
        secondLargest = no
    }
}

console.log(`with brute force, Largest : ${largest} & second largest : ${secondLargest}`)