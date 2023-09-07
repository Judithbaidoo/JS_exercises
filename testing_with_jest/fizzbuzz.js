const fizzBuzz = (number) => {
    if (number % 5 == 0 && number % 3 == 0) {
        return 'FizzBuzz'
    } else if (number % 5 == 0){
        return 'Buzz'
    } else if (number % 3 == 0){
        return 'Fizz'
    } else {
    
    }
    
}

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(8))
console.log(fizzBuzz(15))
console.log(fizzBuzz(18))
console.log(fizzBuzz(20))

module.exports = fizzBuzz

