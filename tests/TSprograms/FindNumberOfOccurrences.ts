
 function findCount(arr:string) : Map<string, number> {

    const frequency = new Map<string, number> ();

    for(let key of arr.toLowerCase())
    {
        
            frequency.set(key, (frequency.get(key) ?? 0) + 1 )
        
    } 
    return frequency; 
}

console. log(findCount('AutomationTest'));



