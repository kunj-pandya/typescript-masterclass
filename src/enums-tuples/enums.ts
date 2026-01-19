// --> Enums in TypeScript

// ---------------------------------------------
//
// Enums allow you to define a group of named constants.
// Useful when you want a fixed set of values.
//
// Syntax:
// enum Name { VALUE1, VALUE2, VALUE3 }
//
// ---------------------------------------------

// → Basic Numeric Enum
enum Role {
    Admin,
    User,
    Guest
}

let myRole: Role = Role.Admin;
console.log(myRole);  // 0 (Admin = 0 by default)

/* 
Here(if):
//  Enum With Custom Start Values

    enum Role {
        Admin = 33,
        user,
        Guest
    }

Then:

Role.user = 34
ROle.Guest = 35
 */


// -> String Enum
enum Status {
    Success = "SUCCESS",
    Failed = "FAilED",
    Pending = "PENDING"
};

let orderStatus: Status = Status.Success;

console.log(orderStatus);  // SUCCESS


// -> Enum In Object Type
type Employee = {
    name: string,
    role: Role,
};

let emp1: Employee = {
    name: "Kunj",
    role: Role.User
}

console.log(emp1);  // { name: 'Kunj', role: 1 }

// → Using Enum in a Function
function checkStatus(status: Status): string {
    return `Odrder is curreently: ${status}`;
}

console.log(checkStatus(Status.Pending)); // Odrder is curreently: PENDING
