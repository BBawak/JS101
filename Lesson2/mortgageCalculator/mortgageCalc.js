const MESSAGE = require('./mortgageCalc_messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

prompt(MESSAGE['welcome']);

while (true) {
  prompt('---------------------------------');

  prompt(MESSAGE['loanAmountQuestion']);

  let loanAmount = readline.question();
  while (isInvalidNumber(loanAmount)) {
  prompt(MESSAGE['error']);
    loanAmount = readline.question();
  }

  prompt(MESSAGE['interestRateQuestion']);
  prompt("(Example: 5 for 5% or 2.5 for 2.5%)");
  let interestRate = readline.question();

  while (isInvalidNumber(interestRate)) {
    prompt(MESSAGE['error']);
    interestRate = readline.question();
  }

  prompt(MESSAGE['durationOfYearsQuestion']);
  let years = readline.question();

  while (isInvalidNumber(years)) {
    prompt(MESSAGE['error']);
    years = readline.question();
  }

  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let numberOfMonths = Number(years) * 12;

  let monthlyPayment = Number(loanAmount) *
                  (monthlyInterestRate /
                  (1 - Math.pow((1 + monthlyInterestRate), (-Number(numberOfMonths)))));

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);
  prompt(`Estimated number of months to pay off the loan is  : ${numberOfMonths}`)

  prompt(MESSAGE['continue']);
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();Nu
  }

  if (answer[0] === 'n') break;
}