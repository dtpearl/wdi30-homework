// Create a function called notBad that takes a single argument, a string.
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring
// with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.


function notBad(string) {
    const notIndex = string.indexOf('not');
    //console.log(notIndex);
    const badIndex = string.indexOf('bad');
    //console.log(badIndex);
    if (notIndex === -1 || badIndex === -1 || badIndex < notIndex) {
        return string; // it will result to -1 when we do not have that letter or word inside of string.
    } else {
        return `${string.slice(0, notIndex)} good ${string.slice(badIndex + 3)}.`;
    }
}
console.log(notBad('Tina is not that much bad but she is still sick'));
console.log(notBad('The taste was bad!.'));