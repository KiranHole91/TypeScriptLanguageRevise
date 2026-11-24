
/**
 * a type defines the shape, properties, and allowed operations of a value.
 * Unions are allowed in Type
 * extending not allowed >> only intersection
 */
type User = {
  id: number;
  name: string;
  isAdmin?: boolean; // Optional property
};

// Union type (can be one of multiple types)
type Status = "pending" | "active" | "closed";

type empInfo = {
    name : string,
    age : number,
    email :  string,
 }; 

 type unionOfBoth = User | empInfo ; // Union  >>  Choose one of both types
 type usersAndEmpInfo = User & empInfo; //intersection  >> Combine both data types

 const intersectionCheck : usersAndEmpInfo = {name: 'Kiran', id: 1123, email : 'aa@bb.com', age: 32};
 console.log(intersectionCheck);

 const unionCheck : unionOfBoth = {name: 'Kiran', id: 1123, email : 'aa@bb.com', age: 32};
 console.log(unionCheck);

