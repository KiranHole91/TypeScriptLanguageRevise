
/******** Union of multiple Types ********/

let airlineSeat : 'window' | 'aisle' | 'middle'
airlineSeat = 'window'
airlineSeat = 'copilot'  //Error: Type '"copilot"' is not assignable to type '"window" | "aisle" | "middle"'.


/****** Type Narrowing >> when type is UNION narrow it down to distinct type*********/

function getID(id : string | number):string
{
    if(typeof id === 'string')
        return `ID is ${id}`;
    else
        return `ID : ${id}`;

}


function cafeHouse(size: 'large' | 'medium' | 'small' | number)
{
    if(size === 'small')
    {
        console.log(`serve ${size} coffee` );
    }
    else if (size === 'large' || size === 'medium')
    {
        console.log(`${size} order >> make extra coffee` );
    }
    else
        console.log(`coffee order : ${size}`)
}