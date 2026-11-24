
/** Intersection Combines two data types 
 *  Type > combine 2 types
 *  interface > combine 2 interfaces in a TYPE
 */

type a = {   id : number   } ;
type b = {  name : string };

type c = a & b;
const ct = { id : 112, string : 'kiran'};
console.log (ct);

// interface
interface ia {   id : number   } ;
interface ib {  name : string };

type d = a & b;  // intersection always TYPE
const dt = { id : 112, string : 'kiran'};
console.log (dt);

