//Function to calculate absolute value:

function calAbValue(number) {
    return Math.abs(number);
}

const number1 = -20
const number2 = 6.75;
const number3 = 0;
const number4 = -3.14;
const number5 = -45.67;

console.log(`The absolute value of ${number1} is: ${calAbValue(number1)}`);
console.log(`The absolute value of ${number2} is: ${calAbValue(number2)}`);
console.log(`The absolute value of ${number3} is: ${calAbValue(number3)}`);
console.log(`The absolute value of ${number4} is: ${calAbValue(number4)}`);
console.log(`The absolute value of ${number5} is: ${calAbValue(number5)}`);

//Function to calculate power of any number:

function calculatePower() {
    const base = 5;
    const power = 3;
    const result = Math.pow(base, power);
    return result;
}

const solution = calculatePower();
console.log(`5 to the power of 3 is ${solution}.`);

//Function to find square root:

function calcSquareRoot() {
    const num = 144;
    const result2 = Math.sqrt(num);
    return result2;
}

const solution2 = calcSquareRoot();
console.log(`The square root of 144 is ${solution2}.`);

//Function to find min/max:

 function findMin() {
    const result3 = Math.min(3, 78, -12, 0.5, 27);
    return result3;
 }

  function findMax() {
    const result4 = Math.max(3, 78, -12, 0.5, 27);
    return result4;
 }

 const sol3 = findMin();
 const sol4 = findMax();
 
 console.log(`The minimum of the selected array is ${sol3} and the maximum is ${sol4}.`);

 //Function to generate random number between 1 and 50:

 function randGen() {
    const result5 = Math.floor(Math.random() * 50) + 1;;
    return result5;
 }

 const sol5 = (randGen());

 console.log(`The random number selected is ${sol5}.`);

 function roundIt() {
    const number = 23.67891
    const result6 = Math.round(number * 100) / 100;
    return result6;
 }

 const sol6 = (roundIt()); 

 console.log(`Yeehaw, rounding this number puts you at ${sol6}`);