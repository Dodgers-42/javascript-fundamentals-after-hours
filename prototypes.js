/* ===== Prototype Practice ===== */

// Task: You are to build a circle maker that can return values for a circle's area or circumference.



/* == Step 1: Base Constructor ==
  Create a constructor function named CircleMaker that accepts a property for diameter
*/

function CircleMaker(diameter) {
  this.diameter = diameter;
}

/* == Step 2: area Method ==
  Create a method using CircleMaker's prototype that returns the area of a given circle.
  
  Formula for circle area: pi * radius^2
*/

CircleMaker.prototype.area = function() {
  return Math.PI * Math.pow((this.diameter / 2), 2);
}

/* == Step 3: Circumference Method ==
  Create another method using CircleMaker's prototype that returns the circumference of a given circle. 

  Formula for circle circumference: 2 * pi * radius
*/

CircleMaker.prototype.circumference = function() {
  return 2 * Math.PI * (this.diameter / 2);
}

/* == Step 4: Create a new object that uses CircleMaker ==
  Create a circle object that uses the new keyword to use our CircleMaker constructor
  Add a properties and values of diameter: 5 to circle. 
*/

const circle = new CircleMaker(5);

// Test your area and circumference methods by uncommenting the logs below:
console.log(circle.area()); // 19.634954084936208
console.log(circle.circumference()); // 15.707963267948966