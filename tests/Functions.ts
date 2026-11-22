
/*****Normal function with return Type *****/

function addition (a:number, b:number) : number
{
    return a+b;
}

/****** Arrow function *******/

const sum = (a: number, b:number) => { return a+b };


/**** Optional Parameter & no return with void */

function greet(name ?: string) : void
{
    console.log(`Hey There ${name}`)
}