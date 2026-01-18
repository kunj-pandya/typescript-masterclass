// --------------------------------------------------
// --> Method Overriding
// --------------------------------------------------

class Shape {
    area(): number {
        return 0;
    }
}

// --> Method Overriding in Child Class

class Rectangle extends Shape {
    constructor(
        private width: number,
        private height: number,
    ) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
};

// --> another chield class
class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}