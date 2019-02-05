// Space Age Warmup
//
// Given an age in seconds, calculate how old someone would be on the following
// planets:
//
// Earth: orbital period 365.25 Earth days
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
//
// So if you were told someone were 1,000,000,000 seconds old, you should be able
// to say:
//
// You are 31.68808781402895 Earth-years old
// You are 131.56953287725742 Mercury-years old
// You are 51.50882468824545 Venus-years old
// You are 16.848054878116695 Mars-years old
// You are 2.6712565327315225 Jupiter-years old
// You are 1.0760876124018737 Saturn-years old
// You are 0.37716350140100413 Uranus-years old
// You are 0.1922922142624317 Neptune-years old
// There are 31557600 seconds in an Earth year.
//
// Bonus:
// Have the option of either returning the ages on all planets, or any of the above
// planets individually.

console.log(`Is there anybody out there?`);

// const SpaceAge =  function( seconds ){
//
//   // Work out the number of years on earth, as a reference point for calculations
//   this.yearsOnEarth = seconds / 31557600;
//
//   // We'll use a object to store our orbital period conversions, with planet names as keys
//   this.earthToOtherPlanets = {
//     Mercury: 0.2408467,
//     Venus: 0.61519726,
//     Mars: 1.8808158,
//     Jupiter: 11.862615,
//     Saturn: 29.447498,
//     Uranus: 84.016846,
//     Neptune: 164.79132
//   };
//
//   this.yearsOnAllPlanets = function () {
//     // Iterate over our table of planets, and use the conversion factor to work out
//     // the age on that planet
//     for( let planet in this.earthToOtherPlanets ){
//       console.log( `${planet} years: ${ this.yearsOnEarth / this.earthToOtherPlanets[ planet ] }` );
//     }
//   };
//
//   this.yearsOnPlanet = function ( planet ) {
//     // calculate the age on a single requested planet, by name
//     return this.yearsOnEarth / this.earthToOtherPlanets[ planet ];
//   };
//
// };
//
// // This is how we invoke our constructor. The 'new' keyword is the essential magic here.
// const age = new SpaceAge( 1000000000 );
//
// age.yearsOnAllPlanets();
//
// let p = "Mars";
// console.log(`Years on ${p}: ${age.yearsOnPlanet(p)}`);


class SpaceAge {
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

  yearsOnEarth() {
    return this.seconds / 31557600
  }

  yearsOnAllPlanets() {
    for( let planet in this.earthToOtherPlanets ){
      console.log( `${planet} years: ${ this.yearsOnEarth / this.earthToOtherPlanets[ planet ] }` );
    }
  }
}

const age = new SpaceAge( 1000000000 );
age.yearsOnAllPlanets();
