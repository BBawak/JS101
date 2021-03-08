

const MESSAGE = require('./calculator_messages.json');

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGE['welcome']);

while (true) {

  prompt(MESSAGE['firstNumber']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGE['invalidNumber']);
    number1 = readline.question();
  }

  prompt(MESSAGE['secondNumber']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGE['invalidNumber']);
    number2 = readline.question();
  }

  prompt(MESSAGE["selectOperation"]);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is: ${output}`);
  prompt(MESSAGE["continue"]);
  let answer = readline.question();
  if (answer[0].toLocaleLowerCase !== 'y') break;
}

