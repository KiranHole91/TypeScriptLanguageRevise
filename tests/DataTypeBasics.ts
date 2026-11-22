
let  i = 10 // Type Inference  >> assigned number automatically

/////////////////////String

let firstName: string = `Kiran`;  // Type Annotations
let title: string = ` Hole`;
let profile: string = `My name is ${firstName}. 
                        & Surname is ${title}`;

console.log(profile);

//////////////Numbers
let counter: number = 0;
let x: number = 100, 
    y: number = 200;

let octal: number = 0o10; //uses a leading zero followed by the letter o
let hexadecimal: number = 0XA;  //use a leading zero followed by a lowercase or uppercase letter X (0x or 0X)
let big: bigint = 9007199254740991n; // represent whole numbers larger than 2^53 – 1

///////////////////// Boolean
let pending: boolean;
pending = true;
pending = false;


/************ANY >>> AVOID********/
let prime : any 
if (prime)
    console.log("any check")

/****** Use undefined instead of Any */
let prime2: undefined
