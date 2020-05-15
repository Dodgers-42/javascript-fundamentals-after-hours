// Task 1: Copy and paste your prototype in here and refactor into class syntax.


class CircleMaker {
    constructor(diameter) {
        this.diameter = diameter;
    }
    area() {
        return Math.PI * Math.pow((this.diameter / 2), 2);
    }
    circumference() {
        return 2 * Math.PI * (this.diameter / 2);
    }
}


const circle = new CircleMaker(5);


// Test your area and circumference methods by uncommenting the logs below:
console.log(circle.area()); // 19.634954084936208
console.log(circle.circumference()); // 15.707963267948966

// Task 2: Extend the base class CircleMaker with a sub class called SphereMaker.  Find out the formulas for volume and (surface)area for spheres and create those methods using the diameter property from CircleMaker.  Test your work by logging out your volume and area. (4 / 3 * pi r^3) 4 * pi * r^2 

class SphereMaker extends CircleMaker {
    constructor(diameter) {
        super(diameter);
    }
    volume() {
        return 4 / 3 * Math.PI * Math.pow(this.diameter / 2, 3);
    }
    area() {
        return 4 * Math.PI * Math.pow(this.diameter / 2, 2); 
    }
}

const sphere = new SphereMaker(5);

// Test your work by uncommenting the logs below (diameter is 5):
console.log(sphere.area()); //78.53981633974483
console.log(sphere.circumference()); // 15.707963267948966
console.log(sphere.volume()); // 65.44984694978734

