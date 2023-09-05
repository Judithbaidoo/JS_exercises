const loop_exercize = ()=> {
    for (let x = 0 ; x <= 10 ; x++){
        if ( x % 2 == 0) {
            console.log(`${x} is even`)
        } else {
            console.log(`${x} is odd`)
        }
    }

}

console.log(loop_exercize())