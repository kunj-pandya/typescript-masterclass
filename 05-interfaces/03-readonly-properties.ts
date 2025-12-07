// 03 --> Readonly Properties in Interface


/*
---------------------------------------------
readonly prevents modification of a property.
---------------------------------------------
 */


interface Car {
    readonly brand: string;
    model: string;
}

const car1: Car = {
    brand: "Tesla",
    model: "Model 3"
};

console.log(car1); //  { brand: 'Tesla', model: 'Model 3' }

// car1.brand = "BMW";   ❌ ERROR: Cannot modify readonly property

car1.model = "Model Y"; // ✔ allowed

console.log(car1);  // { brand: 'Tesla', model: 'Model Y' }

export { };
