slowMath.add(6, 2)
.then((answer) => {
    console.log(answer);
    return slowMath.multiply(answer, 2);
})
.then((answer) => {
    console.log(answer);
    return slowMath.divide(answer, 4);
})
.then((answer) => {
    console.log(answer);
    return slowMath.subtract(answer, 3);
})
.then((answer) => {
    console.log(answer);
    return slowMath.add(answer, 98);
})
.then((answer) => {
    console.log(answer);
    return slowMath.remainder(answer, 2);
})
.then((answer) => {
    console.log(answer);
    return slowMath.multiply(answer, 50);
})
.then((answer) => {
    console.log(answer);
    return slowMath.divide(answer, 40);
})
.then((answer) => {
    console.log(answer);
    return slowMath.add(answer, 32);
})
.then((answer) => {
    console.log(`The final result is ${answer}`);
})
.catch((err) => {
    console.log(err);
})