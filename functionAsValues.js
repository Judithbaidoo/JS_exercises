// copy to a file called functionsAsValues.js
// This is a function. It has no name and no parameters
() => {
    return 123;
}
  // This is a function with one parameter, but still no name
  // And using briefer syntax that might help when we get to .map and .filter
  const doubleNumber = (n) => 2*n
  // you can see that it is a function like this
console.log(doubleNumber)

const simpleCalculation = doubleNumber
console.log(simpleCalculation)

const uppercaseMessage = (message) => {
    return message.toUpperCase();
}

  // This function accepts as arguments a string message, and a function.
  // It then calls the given function to do its job.
const transform = (message, transformFunction) => {
    return transformFunction(message);
}

console.log(transform("hello", uppercaseMessage))

const lowercaseMessage = (word) => {
    return word.toLowerCase()

}

const transform1 = (word, function_word) => {
    return function_word(word)
}

console.log(transform1('WHY ARE YOU SHOUTING?',lowercaseMessage))