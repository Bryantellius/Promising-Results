let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');
let card7 = document.getElementById('card7');
let card8 = document.getElementById('card8');
let card9 = document.getElementById('card9');

slowMath.add(10, 3)
.then((answer) => {
    console.log(answer);
    card1.textContent = answer;
    return slowMath.multiply(answer, 2);
})
.then((answer) => {
    console.log(answer);
    card2.textContent = answer;
    return slowMath.divide(answer, 4);
})
.then((answer) => {
    console.log(answer);
    card3.textContent = answer;
    return slowMath.subtract(answer, 3);
})
.then((answer) => {
    console.log(answer);
    card4.textContent = answer;
    return slowMath.add(answer, 98);
})
.then((answer) => {
    console.log(answer);
    card5.textContent = answer;
    return slowMath.remainder(answer, 2);
})
.then((answer) => {
    console.log(answer);
    card6.textContent = answer;
    return slowMath.multiply(answer, 50);
})
.then((answer) => {
    console.log(answer);
    card7.textContent = answer;
    return slowMath.remainder(answer, 40);
})
.then((answer) => {
    console.log(answer);
    card8.textContent = answer;
    return slowMath.add(answer, 32);
})
.then((answer) => {
    console.log(`The final result is ${answer}.`);
    card9.textContent = `The final result is ${answer}.`;
})
.catch((err) => {
    alert(err);
    
})