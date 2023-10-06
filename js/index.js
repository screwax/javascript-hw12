let number = 1;

console.log('Перше завдання')

while (number <= 10) {
  console.log(number);
  number++;
}

console.log('Друге завдання')

for (let number = 2; number <= 20; number++) {
    if (number % 2 !== 0) {
      continue; 
}
console.log(number);
}

console.log('Третє завдання')

number = 7;

for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(number + 'x' + i + ' = ' + result);
}

console.log('Четверте завдання')

const numbers1 = [1, 2, 3, 4, 5];
number = 0;
while (number < numbers1.length) {
    console.log(numbers1[number]);
    number++;
}

console.log("Завдання 5");

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (number = 0; number < numbers2.length; number++) {
    if (numbers2[number] === 7) {
        break;
    }
    console.log(numbers2[number]);
}

console.log("Шосте завдання");

const n = 8;
for (number = 0; number < n; number++) {
    if (number === n) {
        break;
    }
    console.log(number);
}

console.log("Сьоме завдання");

number = 1;
while (number <= 20) {
    if (number % 3 === 0) {
        number++;
        continue;
    }
    console.log(number)
    number++;
}