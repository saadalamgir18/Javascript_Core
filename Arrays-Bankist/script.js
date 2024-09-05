'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  containerMovements.innerHTML = '';
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov} €</div>
    </div>
     `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
const createusername = function (accts) {
  accts.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    // return username;
  });
};
const calDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
const calDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outgoing = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outgoing)}€`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

createusername(accounts);
console.log(accounts);

function updateUI(acc) {
  calDisplaySummary(acc);
  calDisplayBalance(acc);
  displayMovements(acc.movements);
}
// Event handlers
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(accounts);
  currentAccount = accounts.find(
    acc =>
      acc.username === inputLoginUsername.value &&
      acc.pin === Number(inputLoginPin.value)
  );
  if (currentAccount) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
  console.log(currentAccount);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
    updateUI(currentAccount);
    inputTransferAmount.blur();
    inputTransferAmount.value = inputTransferTo.value = '';
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  const depositReq = currentAccount.movements.some(
    mov => mov >= loanAmount / 10
  );
  if (loanAmount > 0 && depositReq) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const userneme = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  if (userneme === currentAccount.username && pin === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === userneme);
    console.log('delete account', index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    inputClosePin.value = inputCloseUsername.value = '';
  }
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*

let arr = ["a", "b", "c", "d", "e"];

//slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-3));
console.log(arr.slice(-4, -1));
// splice
console.log(arr.splice(2));
console.log(arr.splice(2, 2));
console.log(arr);
// Reverse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);
// Concat
const letters = arr.concat(arr2);
console.log(arr, arr2);
console.log(letters);
console.log([...arr, ...arr2]);
// Join
console.log(letters.join(" - "));
// at
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));
console.log(arr3.at(-1));
console.log("jonas".at(0));
console.log("jonas".at(-1));

// ForEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// old way
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`you deposidted ${movement}`);
  } else {
    console.log(`you withdrew ${Math.abs(movement)}`);
  }
}
console.log("--------FOREACH----------");
movements.forEach(function (movement, index) {
  if (movement > 0) {
    console.log(`you deposidted ${index}th ${movement}`);
  } else {
    console.log(`you withdrew ${index}th ${Math.abs(movement)}`);
  }
});
//
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);
const withdrawals = movements.filter(mov => mov < 0);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, curr, i, arr) => acc + curr, 0);
console.log(balance);
*/

// Array Methods Practice
// 1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(deposit => deposit > 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(bankDepositSum);
// 2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => (curr >= 1000 ? ++acc : acc), 0);
console.log(numDeposits1000);

// 3
const { deposit, withdrawls } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      curr > 0 ? (sums.deposit += curr) : (sums.withdrawls += curr);
      return sums;
    },
    { deposit: 0, withdrawls: 0 }
  );
console.log(deposit, withdrawls);

// 4.

const converTitleCase = function (title) {
  const capitlize = function (string) {
    return string[0].toUpperCase() + string.slice(1);
  };
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'with', 'in'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitlize(word)))
    .join(' ');
  return capitlize(titleCase);
};

console.log(converTitleCase('this is a nice TITLE'));
console.log(converTitleCase('this is a long TITLE but not too LONG'));
console.log(converTitleCase('and here is another title with EXAMPLE'));
