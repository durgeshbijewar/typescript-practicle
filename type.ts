function add(num1: number, num2: number): number {
    return num1 + num2;
}

//twsting the function 
console.log(`the sum of the 7 and 3 is : ${add (7 , 3)}`);

function subtract(num1: number, num2: number): number {
    return num1 - num2;
}


function multiply(num1: number, num2: number): number {
    return num1 * num2
}

console.log(` the product of 8 band 6 : ${multiply(8 , 6)}`);

function divide(num1: number, num2: number): number | string {
    if (num2 === 0) {
        return `error: division by zer is not allowed`;
    }
     return num1 / num2;
}

console.log(`result of 20 divided by 4: ${divide(20 , 4)}`);
console.log(`when trying to divide 20 by 0 : ${divide(20 , 0)}`);

function findreminder(num1: number, num2: number): number {
    return num1 % num2;
}

const result = findreminder(7 , 3);
console.log(`the reminder of 7 divided by 3 is : $(result)`);