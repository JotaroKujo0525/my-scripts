const { stdout } = require("process");
const readline = require("readline")

const calcInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    stdout.write('Hello and welcome top my first calculator written in node.js using readline module!\n');
    stdout.write('Please enter the first number: ');
    calcInterface.on('line', (input) => {
        const firstNumber = parseInt(input);
        stdout.write('Please enter the second number: ');
        calcInterface.on('line', (input) => {
            const secondNumber = parseInt(input);
            stdout.write('Please enter the operation you want to perform: ');
            calcInterface.on('line', (input) => {
                const operation = input;
                if(operation === '+'){
                    stdout.write(`The result is: ${firstNumber + secondNumber}`);
                }
                else if(operation === '-'){
                    stdout.write(`The result is: ${firstNumber - secondNumber}`);
                }
                else if(operation === '*'){
                    stdout.write(`The result is: ${firstNumber * secondNumber}`);
                }
                else if(operation === '/'){
                    stdout.write(`The result is: ${firstNumber / secondNumber}`);
                }
                else{
                    stdout.write('Wrong input! Try again!');
                }
                calcInterface.close();
            });
        });
    }); 

