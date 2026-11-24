/**
 * Bind to Class not its instance
 * Memory efficient -  no heap memonry for class instance
 * Uses :
 * Utility classess - functions
 * Global constants - baseURL, Env
 */

class staticClass{

    static pName : 'string' = 'Kiran';

     getpName()
    {
         return staticClass.pName;
         return this.pName;  // invalid - this points to current instance of class
    }

}

//const prodName =  staticClass.pName;
//console.log(prodName)
console.log(staticClass.getpName)