 /**
 * Define a structural contract that defines the expected properties, types of an Object
 * Unions are NOT allowed in Type
 * extending & intersection both allowed
 */
 interface empInfo {
    name : string,
    age : number,
    email :  string,
    sex ?: string       //optional type
 };

 // use the interface
 let employee : empInfo = {
    name : 'Kiran',
    age : 35,
    email : 'abc@b.com',
 };

 // extending 2 interfaces > extending interface have properties & types of extended interface

 interface companyInfo extends empInfo{
    companyName : String,
    dept : string;
 };

 let hiredEmployee : companyInfo = {
    name : 'Kiran',
    age : 35,
    email : 'abc@b.com',
    companyName : 'Barclays',
    dept : 'IT'
 }

console.log(employee);
console.log(hiredEmployee);

// Unions not allowed in interface 
//interface unioncheck = empInfo | companyInfo;



