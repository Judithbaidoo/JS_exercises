const addToBatch1 = (array, number) => {
    if (array.length <= 5 ){
    return array.concat(number)
    } else {
        return array
    }
}

console.log(addToBatch1([1], 3));
console.log(addToBatch1([1, 2, 3], 4));
console.log(addToBatch1([], 8));
console.log(addToBatch1([1, 2, 3, 4, 5, 6], 7));
console.log(addToBatch1([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
