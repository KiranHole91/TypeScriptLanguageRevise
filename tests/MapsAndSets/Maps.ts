
const students = new Map<string, number>();

students.set('Kiran', 10);
students.set("Dhruv", 14);
students.set('Jyoti', 20);
students.set('Daksh', 1);
students.set('DD', 19);

console.log(students);
console.log(`Size is : ${students.size}`);
console.log(`get() Dhruv : ${students.get('Dhruv')}`);
console.log(`has(Daksh)?  : ${students.has("Daksh")}`);
console.log(`Deleting DD : ${students.delete('DD')}`);

//students.clear() // Deletes all record

students.forEach( (key, value) => {
    console.log(`Name : ${value} & Roll No : ${key}` )
})

for(const [key, value] of students)
{
    console.log(`with For Each >> Name : ${key} & Roll No : ${value}` )
}