// Version 1: Constructor Method
// Javascript (until the latest ES6) didn't have a way to define classes, so this is the nearest
// thing. It lets us initialise our object and define its properties and methods, all at once.
// Note the uppercase start of the function name.
// Also note that it is *essential* to use the 'new' keyword below when calling our constructor,
// in order for it to create a new object as expected.


const SpaceAge = function( seconds ) {
// Work out the number of years on earth, as a reference point for calculations
  this.yearsOnEarth = seconds / 31557600
//
// We'll use an object to store our orbital period conversions, with planet names as keys
  this.earthToOtherPlanets = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132,
  }

  this.yearsOnAllPlanets = function() {
// Iterate over our table of planets, and use the conversion factor to work out
// the age on that planet
    for (var planet in this.earthToOtherPlanets) {
      console.log(`${planet} years: ${this.yearsOnEarth / this.earthToOtherPlanets[planet]}`);
    }
  }

  this.yearsOnPlanet = function( planet ) {
    // calculate the age on a single requested planet, by name
    return this.yearsOnEarth / this.earthToOtherPlanets[ planet ]
  }
}

// This is how we invoke our constructor. The 'new' keyword is the essential magic here.
const age = new SpaceAge( 1000000000 );

// age.yearsOnAllPlanets();

let p = "Jupiter"

console.log(`years on ${p} is ${age.yearsOnPlanet(p)}`);


// Version 2: Class
// The difference between constructor and class is merely syntactic sugar
// Class is just the new prettier way
class SpaceAge {
  // This is the method that runs once a new instance of the class is created.
  // It will generally set up variables and declare parameters that we need to use throughout the rest of the object
  constructor(seconds) {
    this.seconds = seconds
    this.earthToOtherPlanets = {
      Mercury: 0.2408467,
      Venus: 0.61519726,
      Mars: 1.8808158,
      Jupiter: 11.862615,
      Saturn: 29.447498,
      Uranus: 84.016846,
      Neptune: 164.79132
    }
  }

  // Notice we don't give these functions variable names. We merely invoke them
  yearsOnEarth(){
    return this.seconds / 31557600;
  }

  yearsOnAllPlanets(){
    for (var planet in this.earthToOtherPlanets) {
      console.log(`${planet} years: ${this.yearsOnEarth() / this.earthToOtherPlanets[planet]}`);
    }
  }
}

// We create a new instance of a class in the same way of the constructor method
const age = new SpaceAge( 1000000000 );

age.yearsOnAllPlanets();
