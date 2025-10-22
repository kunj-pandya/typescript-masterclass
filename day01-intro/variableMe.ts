// -------- Syntax ----------
// let variable: type = value; // value: always in lowercase

// ------ Example ----------
let greetings: string = "Hello kunj";
// greetings = 6;  // Type 'number' is not assignable to type 'string'.

let mynum = 6;
// mynum.toUpperCase();  // String methods can't be used for number

console.log(greetings);

// number
let userId = 112233;
// userId = "kunj" // can't do 

// boolean
let isLoggedIn: boolean = false;

// any 
// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
let hero;

function getHero() {
    return true;
}

hero = getHero();

export { }
