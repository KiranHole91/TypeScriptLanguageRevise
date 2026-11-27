
function findDuplicatesOrUnique(arr : number[]) : Set<number>
{
    let unique = new Set<number>();
    let duplicates = new Set<number>();

    for (let no of arr) {
        if (unique.has(no))
            duplicates.add(no);
        else
            unique.add(no);
    }
    console.log(`Duplicate with spread operator : ${[...duplicates]}`)
    return duplicates;

}

console.log ( findDuplicatesOrUnique([10,20,30, 20, 30, 50]));
