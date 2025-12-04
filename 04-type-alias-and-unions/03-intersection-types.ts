// 03 — Intersection Types in TypeScript

// -------------------------------------------------
// Intersection combines multiple types into one.
// Syntax:
// type Combined = TypeA & TypeB;
//
// Used when an object MUST have all properties of multiple types.
// -------------------------------------------------

// -> two object types
type NameInfo = {
    name: string;
}

type AgeInfo = {
    age: number;
}

// -> intersection combines both
type PersonInfo = NameInfo | AgeInfo;

let user: PersonInfo = {
    name: "vaibhav",
    age: 24
};


console.log(user);  // { name: 'vaibhav', age: 24 }


// -> intersection with more properties
type WorkDetails = {
    company: string;
    role: string;
};

type Employee = NameInfo & AgeInfo & WorkDetails;

let employee: Employee = {
    name: "kunj",
    age: 24,
    company: "Tech Crop",
    role: "Developer",
};

console.log(employee);
// { name: 'kunj', age: 24, company: 'Tech Crop', role: 'Developer' }



//  -> Real Example: Login User
type LoginDetails = {
    email: string;
    password: string;
};

type ProfileDetails = {
    profileCompeted: boolean;
};

type CompletedUser = LoginDetails & ProfileDetails;

const userData: CompletedUser = {
    email: "vatsl@gmail.com",
    password: "ABCD@123",
    profileCompeted: true,
};

console.log(userData);
/* 
{
    email: 'vatsl@gmail.com',
    password: 'ABCD@123',
    profileCompeted: true
}
 */

export { };

