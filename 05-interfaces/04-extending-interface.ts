// 04 --> Extending Interfaces

/* 
---------------------------------------------

One interface can inherit properties from another.
---------------------------------------------
 */

interface User {
    name: string;
    email: string;
}

interface Admin extends User {
    role: string;
}

const admin1: Admin = {
    name: "Kunj",
    email: "kunj@example.com",
    role: "Super Admin"
};

console.log(admin1);
// { name: 'Kunj', email: 'kunj@example.com', role: 'Super Admin' }

export { };
