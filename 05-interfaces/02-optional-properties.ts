// -> 02 Optional Properties in Interface( ?) 

/* 
---------------------------------------------
    Optional properties allow some fields to be missing.
---------------------------------------------
 */

interface Student {
    name: string;
    age: number;
    city?: string;
};

const vaibhav: Student = {
    name: "Vaibhav",
    age: 22,
};

const pranshi: Student = {
    name: "Pranshi",
    age: 20,
    city: "Ahmedabad"
};

console.log(vaibhav);  // { name: 'Vaibhav', age: 22 }
console.log(pranshi);  // { name: 'Pranshi', age: 20, city: 'Ahmedabad' }

export { };
